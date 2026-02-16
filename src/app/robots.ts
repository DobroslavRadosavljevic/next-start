import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/env";
import { ROUTE_PATHS } from "@/constants/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ROUTE_PATHS.home,
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
