import type { Service } from "../../data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({ items }: { items: Service[] }) {
  return <div className="service-grid">{items.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>;
}
