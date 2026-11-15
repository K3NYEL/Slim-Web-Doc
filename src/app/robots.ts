import type { MetadataRoute } from "next";
import { siteConfig } from "../config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    'use Cache': true,
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
