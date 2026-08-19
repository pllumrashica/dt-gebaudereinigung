import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Hinweise zum Datenschutz in der lokalen Entwicklungsfassung.",
  openGraph: {
    title: "Datenschutz | DT-Gebäudereinigung",
    description: "Hinweise zum Datenschutz in der lokalen Entwicklungsfassung.",
  },
};

export default function PrivacyPage() {
  return (
    <main id="hauptinhalt">
      <section className="legal-hero"><div className="shell"><p className="eyebrow"><span /> Rechtliches</p><h1>Datenschutz</h1><p>Transparente Hinweise zur aktuellen lokalen Entwicklungsfassung.</p></div></section>
      <section className="section legal-section"><div className="shell legal-layout">
        <aside><strong>Keine Veröffentlichung</strong><p>Die Website läuft derzeit ausschließlich auf localhost.</p></aside>
        <article className="legal-copy">
          <h2>Aktueller Entwicklungsstand</h2>
          <p>Das Kontaktformular besitzt derzeit keine Server-, SMTP- oder API-Anbindung. Eingaben werden nicht per E-Mail versendet und nicht dauerhaft gespeichert.</p>
          <h2>Vor Veröffentlichung erforderlich</h2>
          <p>Vor dem späteren Betrieb unter einer öffentlichen Domain muss eine geprüfte Datenschutzerklärung auf Basis der tatsächlich eingesetzten Dienste, Kontaktdaten und Verarbeitungsprozesse ergänzt werden.</p>
          <p>Diese Entwicklungsseite ist keine Rechtsberatung und ersetzt keine rechtliche Prüfung. Es wurden bewusst keine unbekannten Unternehmensdaten ergänzt.</p>
          <p>Informationen zum aktuellen Cookie-Einsatz finden Sie unter <Link href="/cookie-einstellungen">Cookie-Einstellungen</Link>.</p>
        </article>
      </div></section>
    </main>
  );
}
