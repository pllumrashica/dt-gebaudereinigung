import type { Metadata } from "next";
import { BrandLogo } from "./components/BrandLogo";
import { SiteChrome } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Professionelle Gebäudereinigung",
  description:
    "Zuverlässige Gebäudereinigung für Unternehmen, Privathaushalte und Immobilien – individuell, flexibel und persönlich.",
};

const services = [
  {
    number: "01",
    title: "Büroreinigung",
    text: "Saubere Arbeitsplätze, Büros, Besprechungsräume und Gemeinschaftsflächen für ein angenehmes und professionelles Arbeitsumfeld.",
  },
  {
    number: "02",
    title: "Unterhaltsreinigung",
    text: "Regelmäßige Reinigung Ihrer Räumlichkeiten nach einem individuell abgestimmten Reinigungsplan.",
  },
  {
    number: "03",
    title: "Gebäudereinigung",
    text: "Professionelle Reinigung und Pflege Ihrer Immobilie – zuverlässig und bedarfsgerecht.",
  },
  {
    number: "04",
    title: "Fensterreinigung",
    text: "Klare Fenster und gepflegte Glasflächen für einen sauberen und hochwertigen Gesamteindruck.",
  },
  {
    number: "05",
    title: "Haushaltsreinigung",
    text: "Unterstützung bei der regelmäßigen oder einmaligen Reinigung Ihres Zuhauses.",
  },
  {
    number: "06",
    title: "Bauendreinigung",
    text: "Gründliche Reinigung nach Bau-, Renovierungs- oder Sanierungsarbeiten für einen bezugsfertigen Abschluss.",
  },
  {
    number: "07",
    title: "Sanitärreinigung",
    text: "Gründliche und hygienische Reinigung von Sanitärbereichen und häufig genutzten Flächen.",
  },
  {
    number: "08",
    title: "Sonderreinigung",
    text: "Individuelle Reinigungslösungen für Anforderungen, die über die klassische Gebäudereinigung hinausgehen.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Persönlicher Service",
    text: "Wir nehmen uns Zeit, Ihre Anforderungen zu verstehen und eine passende Reinigungslösung zu entwickeln.",
  },
  {
    number: "02",
    title: "Individuelle Lösungen",
    text: "Jedes Gebäude ist anders. Deshalb stimmen wir Umfang und Ablauf individuell auf Ihren Bedarf ab.",
  },
  {
    number: "03",
    title: "Zuverlässige Betreuung",
    text: "Klare Kommunikation und strukturierte Abläufe sorgen dafür, dass Sie sich um nichts kümmern müssen.",
  },
  {
    number: "04",
    title: "Flexible Reinigung",
    text: "Einmaliger Auftrag oder regelmäßige Reinigung – unsere Leistungen richten sich nach Ihrem Bedarf.",
  },
];

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    text: "Teilen Sie uns mit, welche Reinigung Sie benötigen und um welches Objekt es sich handelt.",
  },
  {
    number: "02",
    title: "Bedarf besprechen",
    text: "Gemeinsam klären wir Umfang, Anforderungen und den gewünschten Zeitraum.",
  },
  {
    number: "03",
    title: "Persönliches Angebot",
    text: "Sie erhalten ein transparentes, individuell auf Ihre Anforderungen abgestimmtes Angebot.",
  },
  {
    number: "04",
    title: "Reinigung",
    text: "Nach Ihrer Freigabe kümmern wir uns zuverlässig um die vereinbarte Reinigung.",
  },
];

const audiences = [
  {
    label: "Für Unternehmen",
    number: "01",
    items: [
      "Büros & Geschäftsräume",
      "Sanitärbereiche",
      "Gewerbeflächen",
      "Gemeinschaftsbereiche",
    ],
  },
  {
    label: "Für Privatkunden",
    number: "02",
    items: [
      "Wohnungen & Häuser",
      "Fenster",
      "Einmalige Grundreinigungen",
      "Regelmäßige Haushaltsreinigung",
    ],
  },
  {
    label: "Für Bau & Immobilien",
    number: "03",
    items: [
      "Bauendreinigung",
      "Reinigung nach Renovierungen",
      "Objektreinigung",
      "Sonderreinigungen",
    ],
  },
];

const faqs = [
  {
    question: "Welche Reinigungsleistungen bietet DT-Gebäudereinigung an?",
    answer:
      "Unser Angebot umfasst unter anderem Büroreinigung, Unterhaltsreinigung, Gebäudereinigung, Haushaltsreinigung, Fensterreinigung, Bauendreinigung, Sanitärreinigung und Sonderreinigungen.",
  },
  {
    question: "Kann ich auch eine einmalige Reinigung anfragen?",
    answer:
      "Ja. Sie können sowohl regelmäßige als auch einmalige Reinigungsleistungen anfragen.",
  },
  {
    question: "Kann ich ein individuelles Angebot erhalten?",
    answer:
      "Ja. Da jedes Objekt unterschiedliche Anforderungen hat, erstellen wir das Angebot passend zu Ihrem konkreten Bedarf.",
  },
  {
    question: "Wie kann ich einen Termin vereinbaren?",
    answer:
      "Senden Sie uns einfach eine Anfrage über das Kontaktformular oder kontaktieren Sie uns direkt telefonisch.",
  },
  {
    question: "Reinigen Sie auch für Privatkunden?",
    answer:
      "Ja. Neben gewerblichen Objekten können auch private Reinigungsleistungen angefragt werden.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <SiteChrome />

      <section className="hero" id="start">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Professionelle Gebäudereinigung</p>
            <h1>Sauberkeit, die man <em>sieht.</em> Qualität, die man spürt.</h1>
            <p className="hero-lead">
              Zuverlässige Reinigungslösungen für Unternehmen, Büros,
              Haushalte und Immobilien – individuell abgestimmt auf Ihre
              Anforderungen.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="#kontakt">
                Kostenlos anfragen <Arrow />
              </a>
              <a className="text-link" href="#leistungen">
                Leistungen entdecken <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="Professionelle Reinigung einer hellen Küche" />
            <div className="hero-rating">
              <strong>100%</strong>
              <span>Persönlicher Service</span>
            </div>
            <div className="sparkle sparkle-one" aria-hidden="true">✦</div>
            <div className="sparkle sparkle-two" aria-hidden="true">✦</div>
          </div>
        </div>
        <div className="trust-strip">
          <div className="shell trust-grid">
            {[
              "Individuelle Lösungen",
              "Flexible Termine",
              "Persönlicher Ansprechpartner",
              "Privat- & Geschäftskunden",
            ].map((item) => (
              <span key={item}><i aria-hidden="true">✓</i>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> Sauberkeit ohne Kompromisse</p>
            <h2 id="intro-title">Wir kümmern uns um die Sauberkeit. <em>Sie um den Rest.</em></h2>
          </div>
          <div className="intro-copy">
            <p>
              Eine gepflegte Umgebung schafft Vertrauen, Wohlbefinden und einen
              professionellen ersten Eindruck.
            </p>
            <p>
              DT-Gebäudereinigung unterstützt Privat- und Geschäftskunden mit
              individuell abgestimmten Lösungen – von der regelmäßigen
              Unterhaltsreinigung bis zur gründlichen Bauendreinigung.
            </p>
            <blockquote>Saubere Räume. Klare Abläufe. Zuverlässiger Service.</blockquote>
            <a className="button button-dark" href="#kontakt">Jetzt Angebot anfordern <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="services section" id="leistungen" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> Unsere Leistungen</p>
              <h2 id="services-title">Die passende Reinigung für <em>jeden Bedarf.</em></h2>
            </div>
            <p>
              Ob regelmäßige Reinigung oder einmaliger Auftrag – wir finden die
              passende Lösung für Ihr Objekt.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  <span>{service.number}</span>
                  <i>✦</i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#kontakt" aria-label={`${service.title} anfragen`}>
                  Mehr erfahren <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why section" aria-labelledby="why-title">
        <div className="shell why-grid">
          <div className="why-sticky">
            <p className="eyebrow"><span /> Warum DT-Gebäudereinigung?</p>
            <h2 id="why-title">Sauberkeit beginnt mit <em>Vertrauen.</em></h2>
            <p>
              Bei der Reinigung Ihrer Räume geht es um mehr als ein sauberes
              Ergebnis. Es geht um einen Partner, auf den Sie sich verlassen können.
            </p>
            <a className="button button-accent" href="#kontakt">Unverbindlich anfragen <Arrow /></a>
          </div>
          <div className="advantage-list">
            {advantages.map((advantage) => (
              <article key={advantage.title}>
                <span>{advantage.number}</span>
                <div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="ablauf" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow eyebrow-dark"><span /> So einfach funktioniert es</p>
            <h2 id="process-title">In 4 Schritten zu <em>sauberen Räumen.</em></h2>
          </div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
              </article>
            ))}
          </div>
          <div className="centered-action">
            <a className="button button-dark" href="#kontakt">Unverbindlich anfragen <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="audience section" aria-labelledby="audience-title">
        <div className="shell">
          <div className="section-heading split-heading audience-heading">
            <div>
              <p className="eyebrow"><span /> Für Privat und Gewerbe</p>
              <h2 id="audience-title">Die richtige Reinigung für <em>Ihre Immobilie.</em></h2>
            </div>
            <p>
              Von einzelnen Räumen bis zum gesamten Objekt: Wir denken
              Reinigung passend zu Ihrer Situation.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.label}>
                <span className="audience-number">{audience.number}</span>
                <h3>{audience.label}</h3>
                <ul>
                  {audience.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="ueber-uns" aria-labelledby="about-title">
        <div className="shell about-grid">
          <div className="about-visual">
            <div className="about-image" role="img" aria-label="Heller, gepflegter Innenraum" />
            <div className="about-badge"><span>DT</span> Persönlich geführt</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark"><span /> Über DT-Gebäudereinigung</p>
            <h2 id="about-title">Persönlich. Zuverlässig. <em>Sauber.</em></h2>
            <p>
              Hinter DT-Gebäudereinigung steht <strong>Liridona Tahiri</strong>
              {" "}mit dem Anspruch, Kunden eine unkomplizierte und professionelle
              Reinigungslösung anzubieten.
            </p>
            <p>Dabei steht nicht ein Standardpaket im Mittelpunkt, sondern die Frage:</p>
            <blockquote>„Was braucht Ihr Objekt wirklich?“</blockquote>
            <p>
              Gemeinsam finden wir die Reinigungslösung, die zu Ihren Räumlichkeiten,
              Ihrem Zeitplan und Ihren Anforderungen passt.
            </p>
            <a className="text-link text-link-dark" href="#kontakt">Mehr über uns <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="contact-wrap section" id="kontakt" aria-labelledby="contact-title">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow"><span /> Kontakt</p>
            <h2 id="contact-title">Bereit für Räume, in denen man sich <em>wohlfühlt?</em></h2>
            <p>
              Erzählen Sie uns kurz, was gereinigt werden soll. Wir besprechen
              Ihre Anforderungen und erstellen Ihnen ein individuelles,
              unverbindliches Angebot.
            </p>
            <div className="contact-promise">
              <span aria-hidden="true">✦</span>
              <div>
                <strong>Sauberkeit beginnt mit einer Anfrage.</strong>
                <small>Persönlich, unkompliziert und unverbindlich.</small>
              </div>
            </div>
          </div>

          <form className="contact-form" action="#kontakt" method="get">
            <div className="form-heading">
              <span>Ihre Anfrage</span>
              <strong>Kostenlos & unverbindlich</strong>
            </div>
            <div className="field-row">
              <label>
                Name / Unternehmen
                <input name="name" type="text" placeholder="Ihr Name" autoComplete="name" required />
              </label>
              <label>
                E-Mail-Adresse
                <input name="email" type="email" placeholder="name@beispiel.de" autoComplete="email" required />
              </label>
            </div>
            <div className="field-row">
              <label>
                Telefonnummer
                <input name="telefon" type="tel" placeholder="Ihre Telefonnummer" autoComplete="tel" />
              </label>
              <label>
                Gewünschte Reinigung
                <select name="leistung" defaultValue="" required>
                  <option value="" disabled>Bitte auswählen</option>
                  {services.map((service) => <option key={service.title}>{service.title}</option>)}
                  <option>Sonstiges</option>
                </select>
              </label>
            </div>
            <div className="field-row">
              <label>
                Größe des Objekts
                <input name="groesse" type="text" placeholder="z. B. ca. 150 m²" />
              </label>
              <label>
                Zeitraum / Termin
                <input name="termin" type="text" placeholder="z. B. ab September" />
              </label>
            </div>
            <label>
              Ihre Nachricht
              <textarea name="nachricht" rows={4} placeholder="Erzählen Sie uns kurz von Ihrem Objekt und Ihren Wünschen …" />
            </label>
            <label className="checkbox-label">
              <input name="datenschutz" type="checkbox" required />
              <span>
                Ich habe die <a href="#datenschutz">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zu.
              </span>
            </label>
            <button className="button button-accent submit-button" type="submit">
              Unverbindliches Angebot anfordern <Arrow />
            </button>
          </form>
        </div>
      </section>

      <section className="faq section" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <p className="eyebrow eyebrow-dark"><span /> FAQ</p>
            <h2 id="faq-title">Häufig gestellte <em>Fragen.</em></h2>
            <p>Ihre Frage ist nicht dabei? Schreiben Sie uns – wir helfen gerne persönlich weiter.</p>
            <a className="text-link text-link-dark" href="#kontakt">Frage stellen <Arrow /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-orb" aria-hidden="true" />
        <div className="shell final-cta-inner">
          <p className="eyebrow"><span /> Ein sauberes Ergebnis beginnt hier</p>
          <h2>Lassen Sie uns über Ihre <em>Reinigung sprechen.</em></h2>
          <p>Unkompliziert, persönlich und unverbindlich.</p>
          <a className="button button-accent" href="#kontakt">Jetzt Angebot anfordern <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <BrandLogo className="brand-logo--footer" />
            <p>Professionelle Reinigung für Privat- und Geschäftskunden.</p>
          </div>
          <div>
            <h3>Navigation</h3>
            <a href="#start">Startseite</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div>
            <h3>Leistungen</h3>
            <a href="#leistungen">Büroreinigung</a>
            <a href="#leistungen">Unterhaltsreinigung</a>
            <a href="#leistungen">Fensterreinigung</a>
            <a href="#leistungen">Bauendreinigung</a>
          </div>
          <div id="datenschutz">
            <h3>Rechtliches</h3>
            <a href="#datenschutz">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
            <a href="#datenschutz">Cookie-Einstellungen</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 DT-Gebäudereinigung. Alle Rechte vorbehalten.</span>
          <a href="#start">Nach oben ↑</a>
        </div>
      </footer>
    </main>
  );
}
