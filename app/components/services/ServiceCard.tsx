import Image from "next/image";
import Link from "next/link";
import type { Service } from "../../data/services";
import { Arrow } from "../ui/Arrow";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <Link className="service-card-media" href={`/leistungen/${service.slug}`} tabIndex={-1} aria-hidden="true">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </Link>
      <div className="service-card-body">
        <span className="service-number">{service.number}</span>
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <Link href={`/leistungen/${service.slug}`} aria-label={`${service.title}: Mehr erfahren`}>
          Mehr erfahren <Arrow />
        </Link>
      </div>
    </article>
  );
}
