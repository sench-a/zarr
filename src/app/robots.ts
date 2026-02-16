import { WEBSITE_CONFIG } from "@/config/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    host: WEBSITE_CONFIG.url,
    sitemap: `${WEBSITE_CONFIG.url}/sitemap.xml`,
  };
}
