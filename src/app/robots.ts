import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { ROUTE_PATHS } from "@/constants/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ROUTE_PATHS.home,
    },
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
