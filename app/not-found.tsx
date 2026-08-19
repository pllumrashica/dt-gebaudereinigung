import Link from "next/link";
import { Arrow } from "./components/ui/Arrow";

export default function NotFound() {
  return (
    <main id="hauptinhalt" className="not-found-page">
      <div className="not-found-orb" aria-hidden="true" />
      <div className="shell not-found-inner">
        <span>404</span>
        <p className="eyebrow"><i /> Seite nicht gefunden</p>
        <h1>Diese Seite konnten wir leider <em>nicht finden.</em></h1>
        <p>Vielleicht wurde die Adresse geändert oder der Link ist nicht mehr aktuell.</p>
        <div className="button-row">
          <Link className="button button-accent" href="/">Zur Startseite <Arrow /></Link>
          <Link className="text-link" href="/kontakt">Kontakt <Arrow /></Link>
        </div>
      </div>
    </main>
  );
}
