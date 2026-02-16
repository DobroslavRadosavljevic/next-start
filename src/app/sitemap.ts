import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { ROUTE_PATHS } from "@/constants/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}${ROUTE_PATHS.home}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}${ROUTE_PATHS.about}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${env.NEXT_PUBLIC_SITE_URL}/opengraph-image`],
    },
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}${ROUTE_PATHS.products}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${env.NEXT_PUBLIC_SITE_URL}/opengraph-image`],
    },
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}${ROUTE_PATHS.contact}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${env.NEXT_PUBLIC_SITE_URL}/opengraph-image`],
    },
  ];
}
