import type { MetadataRoute } from "next";
import { services } from "./data/services";
import { siteUrl } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/leistungen", "/ueber-uns", "/ablauf", "/faq", "/kontakt", "/impressum", "/datenschutz", "/cookie-einstellungen"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" as const })),
    ...services.map((service) => ({ url: `${siteUrl}/leistungen/${service.slug}`, changeFrequency: "monthly" as const })),
  ];
}
