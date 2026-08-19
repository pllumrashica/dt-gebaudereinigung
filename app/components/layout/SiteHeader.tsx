"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "../../data/navigation";
import { Arrow } from "../ui/Arrow";
import { BrandLogo } from "./BrandLogo";

const mobileMenuQuery = "(max-width: 1024px)";

function routeIsActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [clientReady, setClientReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (!window.matchMedia(mobileMenuQuery).matches) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuMounted(true);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setMenuOpen(true)));
  }, []);

  const closeMenu = useCallback((restoreFocus = true) => {
    if (restoreFocus) triggerRef.current?.focus();
    setMenuOpen(false);
    closeTimerRef.current = setTimeout(() => setMenuMounted(false), 420);
  }, []);

  useEffect(() => {
    setClientReady(true);
    const updateHeader = () => setScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuMounted) return;
    document.body.classList.add("mega-menu-open");
    return () => document.body.classList.remove("mega-menu-open");
  }, [menuMounted]);

  useEffect(() => {
    if (!menuOpen) return;
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => !element.hasAttribute("disabled"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileMenuQuery);
    const disableOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) return;
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      setMenuOpen(false);
      setMenuMounted(false);
      document.body.classList.remove("mega-menu-open");
    };
    mediaQuery.addEventListener("change", disableOnDesktop);
    return () => mediaQuery.removeEventListener("change", disableOnDesktop);
  }, []);

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    document.body.classList.remove("mega-menu-open");
  }, []);

  const menu = menuMounted ? (
    <div
      className="mega-menu"
      id="hauptmenue"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Hauptmenü"
      aria-hidden={!menuOpen}
      data-state={menuOpen ? "open" : "closing"}
    >
      <div className="mega-menu-orb mega-menu-orb-one" aria-hidden="true" />
      <div className="mega-menu-orb mega-menu-orb-two" aria-hidden="true" />
      <div className="mega-menu-inner shell">
        <div className="mega-menu-topbar">
          <Link href="/" onClick={() => closeMenu(false)} aria-label="Zur Startseite">
            <BrandLogo className="brand-logo--mega" linked={false} priority />
          </Link>
          <button className="mega-menu-close" ref={closeButtonRef} type="button" onClick={() => closeMenu()} aria-label="Menü schließen">
            <span>Schließen</span><i aria-hidden="true">×</i>
          </button>
        </div>
        <div className="mega-menu-content">
          <nav className="mega-menu-nav" aria-label="Mobile Navigation">
            {mainNavigation.map((item, index) => (
              <Link
                className="mega-menu-link"
                href={item.href}
                key={item.href}
                aria-current={routeIsActive(pathname, item.href) ? "page" : undefined}
                onClick={() => closeMenu(false)}
                style={{ "--menu-delay": `${index * 45}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
          <aside className="mega-menu-aside">
            <p className="eyebrow eyebrow-dark"><span /> Reinigungsservice</p>
            <h2>Saubere Räume beginnen mit einem <em>klaren Plan.</em></h2>
            <p>Persönliche Reinigungslösungen für Unternehmen, Privathaushalte und Immobilien.</p>
            <Link className="button button-accent mega-menu-cta" href="/kontakt" onClick={() => closeMenu(false)}>
              Angebot anfordern <Arrow />
            </Link>
          </aside>
        </div>
        <div className="mega-menu-footer">
          <span>DT-Gebäudereinigung</span>
          <span>Persönlich · Zuverlässig · Sauber</span>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner shell">
          <BrandLogo className="brand-logo--header" priority />
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {mainNavigation.map((item) => (
              <Link href={item.href} key={item.href} aria-current={routeIsActive(pathname, item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="button button-small button-dark header-cta" href="/kontakt">
              Angebot anfordern <Arrow />
            </Link>
            <button
              className="menu-trigger"
              type="button"
              ref={triggerRef}
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-controls="hauptmenue"
              aria-label="Hauptmenü öffnen"
            >
              <span>Menü</span><i aria-hidden="true"><b /><b /></i>
            </button>
          </div>
        </div>
      </header>
      {clientReady && menu ? createPortal(menu, document.body) : null}
    </>
  );
}
