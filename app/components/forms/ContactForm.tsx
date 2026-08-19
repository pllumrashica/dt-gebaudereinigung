"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "../../data/services";
import { Arrow } from "../ui/Arrow";

type FormState = "idle" | "success";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    // TODO: Replace this local-only acknowledgement with the approved SMTP/API integration before publishing.
    setState("success");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-heading">
        <div>
          <span>Ihre Anfrage</span>
          <strong>Unverbindlich und persönlich</strong>
        </div>
        <small>Mit * markierte Felder sind erforderlich.</small>
      </div>

      <div className="field-row">
        <label htmlFor="contact-name">Name *</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />
        <label htmlFor="contact-company">Unternehmen <span>(optional)</span></label>
        <input id="contact-company" name="unternehmen" type="text" autoComplete="organization" />
      </div>

      <div className="field-row">
        <label htmlFor="contact-email">E-Mail *</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="contact-phone">Telefon <span>(optional)</span></label>
        <input id="contact-phone" name="telefon" type="tel" autoComplete="tel" />
      </div>

      <div className="field-row">
        <label htmlFor="contact-service">Art der Reinigung *</label>
        <select id="contact-service" name="leistung" defaultValue="" required>
          <option value="" disabled>Bitte auswählen</option>
          {services.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}
          <option value="sonstiges">Sonstiges</option>
        </select>
        <label htmlFor="contact-property">Objektart *</label>
        <select id="contact-property" name="objektart" defaultValue="" required>
          <option value="" disabled>Bitte auswählen</option>
          <option>Büro / Geschäftsräume</option>
          <option>Wohnung</option>
          <option>Haus</option>
          <option>Gewerbeimmobilie</option>
          <option>Bau- / Renovierungsobjekt</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div className="field-row">
        <label htmlFor="contact-size">Ungefähre Fläche <span>(optional)</span></label>
        <input id="contact-size" name="flaeche" type="text" inputMode="decimal" placeholder="z. B. ca. 150 m²" />
        <label htmlFor="contact-date">Zeitraum / Termin <span>(optional)</span></label>
        <input id="contact-date" name="termin" type="text" placeholder="z. B. ab September" />
      </div>

      <label htmlFor="contact-message">Ihre Nachricht *</label>
      <textarea id="contact-message" name="nachricht" rows={6} required placeholder="Erzählen Sie uns kurz von Ihrem Objekt und Ihren Anforderungen …" />

      <label className="checkbox-label" htmlFor="contact-privacy">
        <input id="contact-privacy" name="datenschutz" type="checkbox" required />
        <span>Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *</span>
      </label>

      {state === "success" && (
        <div className="form-status" role="status" tabIndex={-1}>
          <strong>Lokale Testanfrage erfasst.</strong>
          <span>In dieser Entwicklungsfassung wurde keine Nachricht versendet. Die spätere Versand-Anbindung ist bewusst noch nicht eingerichtet.</span>
        </div>
      )}

      <button className="button button-accent submit-button" type="submit">
        Unverbindlich anfragen <Arrow />
      </button>
    </form>
  );
}
