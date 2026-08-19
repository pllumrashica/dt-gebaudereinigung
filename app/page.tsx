import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceGrid } from "./components/services/ServiceGrid";
import { Arrow } from "./components/ui/Arrow";
import { CTASection } from "./components/ui/CTASection";
import { FAQAccordion } from "./components/ui/FAQAccordion";
import { ProcessSteps } from "./components/ui/ProcessSteps";
import { SectionHeading } from "./components/ui/SectionHeading";
import { faqItems } from "./data/faq";
import { services } from "./data/services";

export const metadata: Metadata = {
  title: "Professionelle Gebäudereinigung",
  description:
    "Zuverlässige Reinigungslösungen für Unternehmen, Privathaushalte und Immobilien – individuell, flexibel und persönlich.",
  openGraph: {
    title: "Sauberkeit, die man sieht. Qualität, die man spürt.",
    description: "Individuelle Gebäudereinigung für Privat- und Geschäftskunden.",
  },
};

const advantages = [
  { number: "01", title: "Persönlicher Service", text: "Wir nehmen uns Zeit, Ihre Anforderungen zu verstehen und eine passende Lösung zu entwickeln." },
  { number: "02", title: "Individuelle Lösungen", text: "Umfang, Häufigkeit und Ablauf werden passend zu Ihrem Objekt vereinbart." },
  { number: "03", title: "Klare Kommunikation", text: "Transparente Absprachen sorgen für nachvollziehbare Abläufe von der Anfrage bis zur Reinigung." },
  { number: "04", title: "Flexible Reinigung", text: "Einmaliger Auftrag oder regelmäßige Termine – entscheidend ist Ihr tatsächlicher Bedarf." },
];

const audiences = [
  { number: "01", title: "Für Unternehmen", text: "Büros, Geschäftsräume, Gemeinschafts- und Sanitärbereiche – passend zum betrieblichen Alltag.", href: "/leistungen/bueroreinigung" },
  { number: "02", title: "Für Privatkunden", text: "Wohnungen, Häuser und Fenster – einmalig oder als regelmäßig vereinbarte Unterstützung.", href: "/leistungen/haushaltsreinigung" },
  { number: "03", title: "Für Bau & Immobilien", text: "Bauendreinigung, allgemeine Objektpflege und individuell geprüfte Sonderaufgaben.", href: "/leistungen/bauendreinigung" },
];

export default function Home() {
  return (
    <main id="hauptinhalt">
      <section className="hero">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Professionelle Gebäudereinigung</p>
            <h1>Sauberkeit, die man <em>sieht.</em> Qualität, die man spürt.</h1>
            <p className="hero-lead">
              DT-Gebäudereinigung bietet zuverlässige Reinigungslösungen für Unternehmen,
              Privathaushalte und Immobilien – individuell abgestimmt auf Ihren Bedarf.
            </p>
            <div className="button-row">
              <Link className="button button-accent" href="/kontakt">Angebot anfordern <Arrow /></Link>
              <Link className="text-link" href="/leistungen">Leistungen entdecken <Arrow direction="right" /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              className="hero-image"
              src="/images/stock/hero-cleaning.jpg"
              alt="Professionelle Reinigung einer hellen Küche"
              fill
              sizes="(max-width: 820px) 100vw, 48vw"
              priority
            />
            <div className="hero-note"><span>DT</span><strong>Persönlich abgestimmt</strong></div>
            <i className="sparkle sparkle-one" aria-hidden="true">✦</i>
            <i className="sparkle sparkle-two" aria-hidden="true">✦</i>
          </div>
        </div>
        <div className="trust-strip">
          <div className="shell trust-grid">
            {["Individuelle Lösungen", "Flexible Termine", "Persönlicher Kontakt", "Privat & Gewerbe"].map((item) => (
              <span key={item}><i aria-hidden="true">✓</i>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell intro-grid">
          <SectionHeading eyebrow="Sauberkeit ohne Umwege" title={<>Wir kümmern uns um die Sauberkeit. <em>Sie um den Rest.</em></>} />
          <div className="intro-copy">
            <p>Eine gepflegte Umgebung schafft Wohlbefinden und einen professionellen ersten Eindruck.</p>
            <p>Wir unterstützen Privat- und Geschäftskunden mit Lösungen, die zu Räumen, Zeitplan und Anforderungen passen.</p>
            <blockquote>Saubere Räume. Klare Abläufe. Zuverlässiger Service.</blockquote>
            <Link className="button button-dark" href="/kontakt">Reinigung anfragen <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="heading-row">
            <SectionHeading
              eyebrow="Unsere Leistungen"
              title={<>Die passende Reinigung für <em>jeden Bedarf.</em></>}
              text="Regelmäßig oder einmalig: Jede Leistung wird passend zum Objekt vereinbart."
            />
            <Link className="text-link text-link-dark" href="/leistungen">Alle Leistungen <Arrow /></Link>
          </div>
          <ServiceGrid items={services} />
        </div>
      </section>

      <section className="section why-section">
        <div className="shell why-grid">
          <div className="why-copy">
            <p className="eyebrow"><span /> Warum DT-Gebäudereinigung?</p>
            <h2>Sauberkeit beginnt mit <em>Vertrauen.</em></h2>
            <p>Bei der Reinigung Ihrer Räume zählt nicht nur das Ergebnis. Wichtig ist ein persönlicher Kontakt und ein klar vereinbarter Ablauf.</p>
            <Link className="button button-accent" href="/ueber-uns">DT kennenlernen <Arrow /></Link>
          </div>
          <div className="advantage-list">
            {advantages.map((item) => (
              <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionHeading eyebrow="So einfach funktioniert es" align="center" title={<>In vier Schritten zu <em>sauberen Räumen.</em></>} />
          <ProcessSteps compact withLink />
        </div>
      </section>

      <section className="section audience-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Privat und Gewerbe"
            title={<>Die richtige Reinigung für <em>Ihre Immobilie.</em></>}
            text="Von einzelnen Räumen bis zum gesamten Objekt: Wir denken Reinigung passend zu Ihrer Situation."
          />
          <div className="audience-grid">
            {audiences.map((item) => (
              <article className="audience-card" key={item.number}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
                <Link href={item.href}>Passende Leistung <Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="shell about-grid">
          <div className="about-media">
            <Image src="/images/stock/about-cleaning.jpg" alt="Gepflegter moderner Innenraum" fill sizes="(max-width: 820px) 100vw, 48vw" />
            <div className="about-badge"><span>DT</span> Persönlich geführt</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark"><span /> Über DT-Gebäudereinigung</p>
            <h2>Persönlich. Zuverlässig. <em>Sauber.</em></h2>
            <p>Hinter DT-Gebäudereinigung steht <strong>Liridona Tahiri</strong> mit dem Anspruch, Kunden eine unkomplizierte und professionelle Reinigungslösung anzubieten.</p>
            <blockquote>„Was braucht Ihr Objekt wirklich?“</blockquote>
            <p>Diese Frage steht vor jedem Angebot – denn die passende Lösung beginnt mit Zuhören.</p>
            <Link className="text-link text-link-dark" href="/ueber-uns">Mehr über uns <Arrow /></Link>
          </div>
        </div>
      </section>

      <CTASection />

      <section className="section faq-preview">
        <div className="shell faq-grid">
          <div className="faq-copy">
            <p className="eyebrow eyebrow-dark"><span /> Häufige Fragen</p>
            <h2>Gut informiert <em>anfragen.</em></h2>
            <p>Antworten auf die wichtigsten Fragen rund um Leistungen, Ablauf und individuelle Angebote.</p>
            <Link className="text-link text-link-dark" href="/faq">Alle Fragen ansehen <Arrow /></Link>
          </div>
          <FAQAccordion items={faqItems.slice(0, 4)} />
        </div>
      </section>

      <section className="section contact-preview">
        <div className="shell contact-preview-inner">
          <div>
            <p className="eyebrow"><span /> Kontakt</p>
            <h2>Erzählen Sie uns kurz, <em>was gereinigt werden soll.</em></h2>
          </div>
          <div>
            <p>Auf der Kontaktseite können Sie alle wichtigen Angaben zu Objekt, gewünschter Reinigung und Zeitraum übermitteln.</p>
            <Link className="button button-accent" href="/kontakt">Zur Anfrage <Arrow /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
