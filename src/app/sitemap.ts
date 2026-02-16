import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${getSiteUrl()}/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
