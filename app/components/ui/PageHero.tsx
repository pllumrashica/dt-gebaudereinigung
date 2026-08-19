import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { Breadcrumbs } from "./Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; href?: string }[];
  cta?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  breadcrumbs,
  cta = false,
}: PageHeroProps) {
  return (
    <section className={`page-hero ${image ? "page-hero--image" : ""}`}>
      <div className="page-hero-orb" aria-hidden="true" />
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <p className="eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          {cta && (
            <Link className="button button-accent" href="/kontakt">
              Reinigung anfragen <Arrow />
            </Link>
          )}
        </div>
        {image && (
          <div className="page-hero-media">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 820px) 100vw, 48vw" priority />
          </div>
        )}
      </div>
    </section>
  );
}
