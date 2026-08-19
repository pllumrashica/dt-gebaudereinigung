import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceGrid } from "../../components/services/ServiceGrid";
import { Arrow } from "../../components/ui/Arrow";
import { CTASection } from "../../components/ui/CTASection";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessSteps } from "../../components/ui/ProcessSteps";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { getService, services } from "../../data/services";
import { siteName, siteUrl } from "../../data/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const imageUrl = `${siteUrl}${service.image}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: imageUrl, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedSlugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: `${siteUrl}/leistungen` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteUrl}/leistungen/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: { "@type": "Organization", name: siteName, url: siteUrl },
    url: `${siteUrl}/leistungen/${service.slug}`,
  };

  return (
    <main id="hauptinhalt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        eyebrow="Reinigungsleistung"
        title={service.title}
        text={service.shortDescription}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.title },
        ]}
        cta
      />

      <section className="section service-intro">
        <div className="shell service-intro-grid">
          <SectionHeading eyebrow={`Über ${service.title}`} title={<>Reinigung, die zu Ihrem <em>Bedarf passt.</em></>} />
          <div className="rich-copy">{service.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section included-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Typische Leistungen"
            title={<>Was vereinbart werden <em>kann.</em></>}
            text="Die folgende Übersicht zeigt typische Aufgaben. Der konkrete Umfang wird vorab individuell festgelegt."
          />
          <ul className="included-grid">
            {service.includedServices.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="shell benefits-grid">
          <div>
            <p className="eyebrow"><span /> Ihre Vorteile</p>
            <h2>Praktisch geplant. <em>Persönlich abgestimmt.</em></h2>
          </div>
          <div className="benefit-list">
            {service.benefits.map((benefit) => <p key={benefit}><i aria-hidden="true">✓</i>{benefit}</p>)}
          </div>
        </div>
      </section>

      <section className="section scope-section">
        <div className="shell scope-card">
          <span className="scope-number">DT</span>
          <div><p className="eyebrow eyebrow-dark"><span /> Individueller Umfang</p><h2>So viel wie nötig. So klar wie möglich.</h2></div>
          <p>Flächen, Aufgaben, Häufigkeit und Zeitrahmen werden gemeinsam vereinbart. So wissen beide Seiten, was zum Auftrag gehört.</p>
          <Link className="button button-dark" href="/kontakt">Details besprechen <Arrow /></Link>
        </div>
      </section>

      <section className="section process-section process-section--light">
        <div className="shell">
          <SectionHeading eyebrow="So geht es weiter" align="center" title={<>Von der Anfrage zur <em>Reinigung.</em></>} />
          <ProcessSteps compact />
        </div>
      </section>

      <section className="section related-section">
        <div className="shell">
          <div className="heading-row">
            <SectionHeading eyebrow="Weitere Leistungen" title={<>Das könnte ebenfalls <em>passen.</em></>} />
            <Link className="text-link text-link-dark" href="/leistungen">Alle Leistungen <Arrow /></Link>
          </div>
          <ServiceGrid items={related} />
        </div>
      </section>

      <CTASection eyebrow={service.title} title={`${service.title} unverbindlich anfragen.`} />
    </main>
  );
}
