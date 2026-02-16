import { WEBSITE_CONFIG } from "@/config/site";
import type { MetadataRoute } from "next";

const date = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: WEBSITE_CONFIG.url,
    lastModified: date,
  };

  return [home];
}
