import type { Route } from "next";
import type { Graph } from "schema-dts";

import { getSiteUrl } from "@/config/env";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/metadata";

interface WebPageSchemaParams {
  pageTitle: string;
  pageDescription: string;
  pagePath: Route;
  canonicalUrl?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: Route;
}

interface BreadcrumbSchemaParams {
  items: readonly BreadcrumbItem[];
}

const normalizePath = (path: string): string =>
  path.startsWith("/") ? path : `/${path}`;

/**
 * Build WebSite + Organization JSON-LD schema for the root layout.
 * Uses @graph to link Organization as publisher of WebSite.
 */
export const buildSiteJsonLd = (): Graph => {
  const siteUrl = getSiteUrl();
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        url: siteUrl,
        description: SITE_DESCRIPTION,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
    ],
  };
};

export const buildWebPageJsonLd = ({
  pageTitle,
  pageDescription,
  pagePath,
  canonicalUrl,
}: WebPageSchemaParams): Graph => {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${normalizePath(pagePath)}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#/schema/webpage`,
        url: canonicalUrl ?? pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": `${siteUrl}#/schema/website` },
        inLanguage: "en-US",
      },
    ],
  };
};

export const buildBreadcrumbJsonLd = ({
  items,
}: BreadcrumbSchemaParams): Graph => {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}#/schema/breadcrumb`,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${normalizePath(item.path)}`,
        })),
      },
    ],
  };
};
