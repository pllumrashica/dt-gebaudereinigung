import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGrid } from "../components/services/ServiceGrid";
import { Arrow } from "../components/ui/Arrow";
import { CTASection } from "../components/ui/CTASection";
import { PageHero } from "../components/ui/PageHero";
import { ProcessSteps } from "../components/ui/ProcessSteps";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Büro-, Unterhalts-, Gebäude-, Fenster-, Haushalts-, Bauend-, Sanitär- und Sonderreinigung im Überblick.",
  openGraph: { title: "Unsere Reinigungsleistungen", description: "Die passende Reinigung für jeden Bedarf – individuell abgestimmt." },
};

export default function ServicesPage() {
  return (
    <main id="hauptinhalt">
      <PageHero
        eyebrow="Unsere Leistungen"
        title={<>Die passende Reinigung für <em>jeden Bedarf.</em></>}
        text="Ob regelmäßige Reinigung oder einmaliger Auftrag: Wir stimmen die passende Lösung auf Ihr Objekt und Ihre Anforderungen ab."
      />

      <section className="section services-overview">
        <div className="shell">
          <ServiceGrid items={services} />
        </div>
      </section>

      <section className="section individual-section">
        <div className="shell individual-grid">
          <SectionHeading
            eyebrow="Individuell statt pauschal"
            title={<>Ihr Objekt gibt den <em>Umfang vor.</em></>}
          />
          <div className="individual-copy">
            <p>Fläche, Nutzung und gewünschte Häufigkeit unterscheiden sich von Objekt zu Objekt. Deshalb klären wir zuerst, was tatsächlich benötigt wird.</p>
            <p>Aus diesem Gespräch entsteht ein nachvollziehbares Angebot – ohne unpassendes Standardpaket.</p>
            <Link className="text-link text-link-dark" href="/kontakt">Bedarf schildern <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section process-section process-section--light">
        <div className="shell">
          <SectionHeading eyebrow="Der Weg zur Reinigung" align="center" title={<>Einfach anfragen. <em>Klar abstimmen.</em></>} />
          <ProcessSteps compact withLink />
        </div>
      </section>

      <CTASection eyebrow="Passende Leistung gefunden?" title="Lassen Sie uns den konkreten Bedarf besprechen." />
    </main>
  );
}
