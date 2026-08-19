import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der DT-Gebäudereinigung.",
  openGraph: {
    title: "Impressum | DT-Gebäudereinigung",
    description: "Impressum der DT-Gebäudereinigung.",
  },
};

export default function ImprintPage() {
  return (
    <main id="hauptinhalt">
      <section className="legal-hero"><div className="shell"><p className="eyebrow"><span /> Rechtliches</p><h1>Impressum</h1><p>Rechtliche Anbieterinformationen für DT-Gebäudereinigung.</p></div></section>
      <section className="section legal-section"><div className="shell legal-layout">
        <aside><strong>Lokale Entwicklungsfassung</strong><p>Diese Seite ist noch nicht zur Veröffentlichung bestimmt.</p></aside>
        <article className="legal-copy">
          <h2>Angaben vor Veröffentlichung ergänzen</h2>
          <p>Im Projekt liegen derzeit keine bestätigten vollständigen Anbieter-, Anschrift- oder Kontaktdaten für ein rechtssicheres Impressum vor.</p>
          <p>Vor einer Veröffentlichung müssen die geprüften Unternehmensangaben durch die verantwortliche Person ergänzt werden. Es wurden bewusst keine Daten erfunden.</p>
          <p>Bei Fragen zur lokalen Fassung wechseln Sie bitte zur <Link href="/kontakt">Kontaktseite</Link>.</p>
        </article>
      </div></section>
    </main>
  );
}
