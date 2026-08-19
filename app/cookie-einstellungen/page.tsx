import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie-Einstellungen",
  description: "Cookie-Hinweise für die lokale Entwicklungsfassung.",
  openGraph: {
    title: "Cookie-Einstellungen | DT-Gebäudereinigung",
    description: "Cookie-Hinweise für die lokale Entwicklungsfassung.",
  },
};

export default function CookiePage() {
  return (
    <main id="hauptinhalt">
      <section className="legal-hero"><div className="shell"><p className="eyebrow"><span /> Rechtliches</p><h1>Cookie-Einstellungen</h1><p>Der aktuelle Status der lokalen Website auf einen Blick.</p></div></section>
      <section className="section legal-section"><div className="shell legal-layout">
        <aside><strong>Aktuell keine Auswahl nötig</strong><p>Es sind keine Marketing- oder Analysewerkzeuge eingebunden.</p></aside>
        <article className="legal-copy">
          <h2>Lokale Entwicklungsfassung</h2>
          <p>Die aktuelle Website bindet keine Analyse-, Werbe- oder Social-Media-Dienste ein und stellt keine Auswahl für solche Kategorien bereit.</p>
          <p>Wenn später zusätzliche Dienste oder technisch nicht notwendige Cookies hinzukommen, muss diese Seite zusammen mit einem passenden Einwilligungsmechanismus aktualisiert werden.</p>
          <p>Weitere Hinweise finden Sie in der <Link href="/datenschutz">Datenschutzerklärung</Link>.</p>
        </article>
      </div></section>
    </main>
  );
}
