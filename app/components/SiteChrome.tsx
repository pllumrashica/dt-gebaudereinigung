"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BrandLogo } from "./BrandLogo";

const navigationItems = [
  { number: "01", label: "Startseite", href: "#start" },
  { number: "02", label: "Leistungen", href: "#leistungen" },
  { number: "03", label: "Über uns", href: "#ueber-uns" },
  { number: "04", label: "Ablauf", href: "#ablauf" },
  { number: "05", label: "FAQ", href: "#faq" },
  { number: "06", label: "Kontakt", href: "#kontakt" },
];

const mobileMenuQuery = "(max-width: 1024px)";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteChrome() {
  const [isClient, setIsClient] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderLeaving, setPreloaderLeaving] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsClient(true);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const displayTime = reducedMotion ? 80 : 950;
    const exitTime = reducedMotion ? 140 : 430;

    const leaveTimer = window.setTimeout(() => {
      setPreloaderLeaving(true);
    }, displayTime);
    const removeTimer = window.setTimeout(() => {
      setPreloaderVisible(false);
      document.body.classList.remove("is-preloading");
    }, displayTime + exitTime);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("is-preloading");
    };
  }, []);

  useEffect(() => {
    if (!menuMounted) return;

    document.body.classList.add("mega-menu-open");
    return () => {
      document.body.classList.remove("mega-menu-open");
    };
  }, [menuMounted]);

  useEffect(() => {
    if (!menuOpen) return;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 80);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleEscape);
    };
  });

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      document.body.classList.remove("mega-menu-open");
    };
  }, []);

  const openMenu = useCallback(() => {
    if (!window.matchMedia(mobileMenuQuery).matches) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuMounted(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setMenuOpen(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    menuTriggerRef.current?.focus();
    setMenuOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setMenuMounted(false);
    }, 420);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileMenuQuery);

    const disableMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) return;
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      setMenuOpen(false);
      setMenuMounted(false);
      document.body.classList.remove("mega-menu-open");
    };

    mediaQuery.addEventListener("change", disableMenuOnDesktop);
    return () => {
      mediaQuery.removeEventListener("change", disableMenuOnDesktop);
    };
  }, []);

  const megaMenu = menuMounted ? (
    <div
      className="mega-menu"
      id="hauptmenue"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Hauptmenü"
      aria-hidden={!menuOpen}
      tabIndex={-1}
      data-state={menuOpen ? "open" : "closing"}
    >
      <div className="mega-menu-orb mega-menu-orb-one" aria-hidden="true" />
      <div className="mega-menu-orb mega-menu-orb-two" aria-hidden="true" />
      <div className="mega-menu-inner shell">
        <div className="mega-menu-topbar">
          <a
            className="mega-menu-logo-link"
            href="#start"
            onClick={closeMenu}
          >
            <BrandLogo className="brand-logo--mega" linked={false} priority />
          </a>
          <button
            className="mega-menu-close"
            type="button"
            ref={closeButtonRef}
            onClick={closeMenu}
            aria-label="Menü schließen"
          >
            <span>Schließen</span>
            <i aria-hidden="true">×</i>
          </button>
        </div>

        <div className="mega-menu-content">
          <nav className="mega-menu-nav" aria-label="Vollbildnavigation">
            {navigationItems.map((item, index) => (
              <a
                className="mega-menu-link"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
                style={{ "--menu-delay": `${index * 45}ms` } as CSSProperties}
              >
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </nav>

          <aside className="mega-menu-aside">
            <p className="eyebrow eyebrow-dark"><span /> Reinigungsservice</p>
            <h2>Saubere Räume beginnen mit einem <em>klaren Plan.</em></h2>
            <p>
              Persönliche Reinigungslösungen für Unternehmen, Privathaushalte
              und Immobilien.
            </p>
            <a className="button button-accent mega-menu-cta" href="#kontakt" onClick={closeMenu}>
              Angebot anfordern <Arrow />
            </a>
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
      <header className="site-header">
        <div className="header-inner shell">
          <BrandLogo className="brand-logo--header" priority />
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#start">Startseite</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <div className="header-actions">
            <a className="button button-small button-dark header-cta" href="#kontakt">
              Angebot anfordern <Arrow />
            </a>
            <button
              className="menu-trigger"
              type="button"
              ref={menuTriggerRef}
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-controls="hauptmenue"
              aria-label="Hauptmenü öffnen"
            >
              <span>Menü</span>
              <i aria-hidden="true"><b /><b /></i>
            </button>
          </div>
        </div>
      </header>

      {preloaderVisible && (
        <div
          className="preloader"
          data-state={preloaderLeaving ? "leaving" : "visible"}
          role="status"
          aria-label="Website wird geladen"
          aria-live="polite"
        >
          <div className="preloader-orb" aria-hidden="true" />
          <div className="preloader-content">
            <div className="preloader-logo-wrap">
              <BrandLogo className="brand-logo--preloader" linked={false} priority />
              <span className="preloader-shine" aria-hidden="true" />
            </div>
            <span className="preloader-line" aria-hidden="true"><i /></span>
            <small>Persönlich · Zuverlässig · Sauber</small>
          </div>
        </div>
      )}

      {isClient && megaMenu ? createPortal(megaMenu, document.body) : null}
    </>
  );
}
