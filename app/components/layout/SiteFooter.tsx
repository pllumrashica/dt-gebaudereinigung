import Link from "next/link";
import { legalNavigation, mainNavigation } from "../../data/navigation";
import { services } from "../../data/services";
import { BrandLogo } from "./BrandLogo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandLogo className="brand-logo--footer" />
          <p>Professionelle Reinigung für Privat- und Geschäftskunden – persönlich abgestimmt und klar organisiert.</p>
        </div>
        <div>
          <h2>Navigation</h2>
          {mainNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h2>Leistungen</h2>
          {services.slice(0, 6).map((service) => (
            <Link href={`/leistungen/${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </div>
        <div>
          <h2>Rechtliches</h2>
          {legalNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 DT-Gebäudereinigung. Alle Rechte vorbehalten.</span>
        <Link href="/kontakt">Reinigung anfragen ↗</Link>
      </div>
    </footer>
  );
}
