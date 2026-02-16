import type { Metadata, Route } from "next";

import { getSiteUrl } from "@/config/env";
import { SITE_NAME } from "@/constants/metadata";

interface BuildRouteMetadataParams {
  pageTitle: string;
  pageDescription: string;
  pagePath: Route;
}

export const buildRouteMetadata = ({
  pageTitle,
  pageDescription,
  pagePath,
}: BuildRouteMetadataParams): Metadata => {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${pagePath}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
};
