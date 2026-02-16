import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/env";
import { ROUTE_PATHS } from "@/constants/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${getSiteUrl()}${ROUTE_PATHS.home}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${getSiteUrl()}${ROUTE_PATHS.about}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${getSiteUrl()}/opengraph-image`],
    },
    {
      url: `${getSiteUrl()}${ROUTE_PATHS.products}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${getSiteUrl()}/opengraph-image`],
    },
    {
      url: `${getSiteUrl()}${ROUTE_PATHS.contact}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${getSiteUrl()}/opengraph-image`],
    },
  ];
}
