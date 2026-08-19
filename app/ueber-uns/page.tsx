import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../components/ui/Arrow";
import { CTASection } from "../components/ui/CTASection";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Lernen Sie DT-Gebäudereinigung und den persönlichen Ansatz hinter jeder Reinigungslösung kennen.",
  openGraph: { title: "Über DT-Gebäudereinigung", description: "Persönlich. Zuverlässig. Sauber." },
};

const values = [
  { number: "01", title: "Zuhören", text: "Bevor wir eine Lösung vorschlagen, möchten wir Ihr Objekt und Ihre Erwartungen verstehen." },
  { number: "02", title: "Klar abstimmen", text: "Leistungsumfang und Ablauf werden verständlich vereinbart – ohne unnötige Standardpakete." },
  { number: "03", title: "Persönlich begleiten", text: "Ein direkter Kontakt macht Rückfragen und Anpassungen unkompliziert." },
];

export default function AboutPage() {
  return (
    <main id="hauptinhalt">
      <PageHero eyebrow="Über uns" title={<>Sauberkeit ist <em>Vertrauenssache.</em></>} text="DT-Gebäudereinigung verbindet professionellen Anspruch mit persönlicher Betreuung und individuell abgestimmten Lösungen." />

      <section className="section about-story">
        <div className="shell about-story-grid">
          <div className="about-story-media"><Image src="/images/stock/about-cleaning.jpg" alt="Moderner gepflegter Innenraum" fill sizes="(max-width: 820px) 100vw, 44vw" priority /></div>
          <div className="about-story-copy">
            <p className="eyebrow eyebrow-dark"><span /> DT-Gebäudereinigung</p>
            <h2>Persönlich geführt. <em>Auf Ihren Bedarf ausgerichtet.</em></h2>
            <p>Hinter DT-Gebäudereinigung steht <strong>Liridona Tahiri</strong> mit dem Anspruch, Kunden eine unkomplizierte und professionelle Reinigungslösung anzubieten.</p>
            <p>Im Mittelpunkt steht kein starres Paket, sondern die Frage: Welche Reinigung braucht Ihr Objekt wirklich?</p>
            <blockquote>„Eine gute Zusammenarbeit beginnt mit einer klaren Absprache.“</blockquote>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="shell">
          <SectionHeading eyebrow="Was uns wichtig ist" title={<>Ein klarer Weg zu <em>gepflegten Räumen.</em></>} text="Drei Grundsätze prägen die Zusammenarbeit – unabhängig davon, ob es um ein Büro, einen Haushalt oder eine Immobilie geht." />
          <div className="values-grid">
            {values.map((value) => <article key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section customer-section">
        <div className="shell customer-grid">
          <div><p className="eyebrow"><span /> Für Unternehmen</p><h2>Professioneller Eindruck im <em>Arbeitsalltag.</em></h2><p>Von Büros bis zu gemeinsam genutzten Bereichen stimmen wir die Reinigung auf Nutzung und Abläufe ab.</p><Link className="text-link" href="/leistungen/bueroreinigung">Büroreinigung ansehen <Arrow /></Link></div>
          <div><p className="eyebrow"><span /> Für Privatkunden</p><h2>Unterstützung für Ihr <em>Zuhause.</em></h2><p>Wohnungen und Häuser werden respektvoll und entsprechend Ihrer persönlichen Prioritäten gereinigt.</p><Link className="text-link" href="/leistungen/haushaltsreinigung">Haushaltsreinigung ansehen <Arrow /></Link></div>
        </div>
      </section>

      <CTASection eyebrow="Persönlich kennenlernen" title="Was braucht Ihr Objekt wirklich?" />
    </main>
  );
}
