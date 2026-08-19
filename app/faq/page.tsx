import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "../components/ui/Arrow";
import { CTASection } from "../components/ui/CTASection";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { PageHero } from "../components/ui/PageHero";
import { faqItems } from "../data/faq";

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen",
  description: "Antworten auf häufige Fragen zu Leistungen, Terminen, individuellen Angeboten und der Zusammenarbeit.",
  openGraph: { title: "FAQ – DT-Gebäudereinigung", description: "Antworten rund um Ihre Reinigungsanfrage." },
};

export default function FAQPage() {
  return (
    <main id="hauptinhalt">
      <PageHero eyebrow="FAQ" title={<>Häufig gestellte <em>Fragen.</em></>} text="Hier finden Sie Antworten zu unseren Leistungen, individuellen Angeboten und dem Ablauf einer Anfrage." />
      <section className="section faq-page-section">
        <div className="shell faq-page-grid">
          <aside><p className="eyebrow eyebrow-dark"><span /> Noch etwas unklar?</p><h2>Fragen Sie uns <em>persönlich.</em></h2><p>Wenn Ihre Frage hier nicht beantwortet wird, können Sie uns die Details direkt über die Kontaktseite senden.</p><Link className="text-link text-link-dark" href="/kontakt">Frage stellen <Arrow /></Link></aside>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <CTASection eyebrow="Ihre Frage ist nicht dabei?" title="Lassen Sie uns über Ihr Objekt sprechen." />
    </main>
  );
}
