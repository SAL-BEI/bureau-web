import type { MetadataRoute } from "next";
import { services } from "@/data/site";
import { siteFacts } from "@/lib/site-facts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/aviation-printing", "/work", "/about", "/contact", "/privacy"];
  return [
    ...routes.map((route) => ({ url: `${siteFacts.siteUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : route === "/privacy" ? 0.3 : 0.8 })),
    ...services.map((service) => ({ url: `${siteFacts.siteUrl}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
