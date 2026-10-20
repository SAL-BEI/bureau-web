import type { MetadataRoute } from "next";
import { siteFacts } from "@/lib/site-facts";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteFacts.siteUrl}/sitemap.xml` };
}
