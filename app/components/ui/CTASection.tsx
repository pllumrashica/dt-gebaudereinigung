import Link from "next/link";
import { Arrow } from "./Arrow";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export function CTASection({
  eyebrow = "Persönlich abgestimmt",
  title = "Sie suchen eine zuverlässige Reinigungslösung?",
  text = "Erzählen Sie uns kurz von Ihrem Objekt. Wir besprechen den Bedarf und erstellen ein individuelles Angebot.",
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-orb" aria-hidden="true" />
      <div className="shell cta-section-inner">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="button button-accent" href="/kontakt">
          Jetzt unverbindlich anfragen <Arrow />
        </Link>
      </div>
    </section>
  );
}
