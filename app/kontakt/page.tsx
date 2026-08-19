import type { Metadata } from "next";
import { ContactForm } from "../components/forms/ContactForm";
import { PageHero } from "../components/ui/PageHero";

export const metadata: Metadata = {
  title: "Kontakt und Reinigungsanfrage",
  description: "Fragen Sie Ihre individuelle Reinigungslösung unverbindlich bei DT-Gebäudereinigung an.",
  openGraph: { title: "Reinigung anfragen", description: "Erzählen Sie uns kurz, was gereinigt werden soll." },
};

export default function ContactPage() {
  return (
    <main id="hauptinhalt">
      <PageHero eyebrow="Kontakt" title={<>Reinigung <em>anfragen.</em></>} text="Erzählen Sie uns kurz, was gereinigt werden soll. Wir klären Ihre Anforderungen und den passenden nächsten Schritt." />
      <section className="section contact-page-section">
        <div className="shell contact-page-grid">
          <div className="contact-page-copy">
            <p className="eyebrow"><span /> Ihre Anfrage</p>
            <h2>Je genauer die Angaben, desto <em>passender das Gespräch.</em></h2>
            <p>Sie müssen noch nicht jedes Detail kennen. Angaben zu Objektart, ungefährer Fläche und gewünschtem Zeitraum helfen bei der ersten Einschätzung.</p>
            <div className="contact-points">
              <p><i aria-hidden="true">01</i><span><strong>Individuell</strong>Kein starres Standardpaket.</span></p>
              <p><i aria-hidden="true">02</i><span><strong>Unverbindlich</strong>Erst besprechen, dann entscheiden.</span></p>
              <p><i aria-hidden="true">03</i><span><strong>Persönlich</strong>Klare Abstimmung Ihrer Anforderungen.</span></p>
            </div>
            <small>Hinweis: Das Formular arbeitet derzeit ausschließlich lokal. Es versendet noch keine E-Mail.</small>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
