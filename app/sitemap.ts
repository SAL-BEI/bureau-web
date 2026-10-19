import type { MetadataRoute } from "next";
import { services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bureau-web-blond.vercel.app";
  const routes = ["", "/services", "/aviation-printing", "/work", "/about", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
