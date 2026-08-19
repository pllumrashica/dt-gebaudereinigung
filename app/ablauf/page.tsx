import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "../components/ui/Arrow";
import { CTASection } from "../components/ui/CTASection";
import { PageHero } from "../components/ui/PageHero";
import { processSteps } from "../components/ui/ProcessSteps";
import { SectionHeading } from "../components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Ablauf",
  description: "In vier klaren Schritten von der Anfrage zur individuell abgestimmten Reinigung.",
  openGraph: { title: "So funktioniert die Zusammenarbeit", description: "Anfrage, Bedarf, Angebot und Reinigung – transparent erklärt." },
};

const preparation = [
  "Welche Räume oder Flächen sollen gereinigt werden?",
  "Handelt es sich um einen einmaligen oder regelmäßigen Bedarf?",
  "Wie groß ist das Objekt ungefähr?",
  "Welcher Zeitraum oder Termin ist gewünscht?",
];

export default function ProcessPage() {
  return (
    <main id="hauptinhalt">
      <PageHero eyebrow="Unser Ablauf" title={<>Einfach zur passenden <em>Reinigungslösung.</em></>} text="Ein klarer Ablauf gibt Sicherheit. In vier Schritten klären wir, was Ihr Objekt braucht und wie die Reinigung umgesetzt werden kann." />

      <section className="section process-detail-section">
        <div className="shell process-detail-list">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <div><p>Schritt {step.number}</p><h2>{step.title}</h2></div>
              <p>{step.text} Dabei bleiben die Absprachen verständlich und auf die konkrete Situation ausgerichtet.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section preparation-section">
        <div className="shell preparation-grid">
          <SectionHeading eyebrow="Gut vorbereitet anfragen" title={<>Vier Angaben, die uns <em>weiterhelfen.</em></>} text="Sie müssen noch nicht jedes Detail kennen. Eine kurze erste Einschätzung genügt für den Einstieg." />
          <ul>{preparation.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
        </div>
        <div className="shell centered-action"><Link className="button button-dark" href="/kontakt">Anfrage vorbereiten <Arrow /></Link></div>
      </section>

      <CTASection eyebrow="Der erste Schritt" title="Starten Sie mit einer kurzen Anfrage." />
    </main>
  );
}
