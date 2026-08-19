import Link from "next/link";
import { Arrow } from "./Arrow";

export const processSteps = [
  { number: "01", title: "Anfrage senden", text: "Teilen Sie uns mit, welche Reinigung Sie benötigen und um welches Objekt es sich handelt." },
  { number: "02", title: "Bedarf besprechen", text: "Gemeinsam klären wir Umfang, Anforderungen und den gewünschten Zeitraum." },
  { number: "03", title: "Angebot erhalten", text: "Sie erhalten ein transparentes, individuell auf Ihren Bedarf abgestimmtes Angebot." },
  { number: "04", title: "Reinigung starten", text: "Nach Ihrer Freigabe kümmern wir uns um die vereinbarte Reinigung." },
] as const;

export function ProcessSteps({ compact = false, withLink = false }: { compact?: boolean; withLink?: boolean }) {
  return (
    <>
      <div className={`process-grid ${compact ? "process-grid--compact" : ""}`}>
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            {index < processSteps.length - 1 && <i aria-hidden="true">→</i>}
          </article>
        ))}
      </div>
      {withLink && (
        <div className="centered-action">
          <Link className="text-link text-link-dark" href="/ablauf">
            Ablauf im Detail <Arrow />
          </Link>
        </div>
      )}
    </>
  );
}
