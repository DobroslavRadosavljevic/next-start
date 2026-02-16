import { describe, expect, test } from "bun:test";

import { ROUTE_PATHS } from "@/constants/metadata";
import {
  buildBreadcrumbJsonLd,
  buildSiteJsonLd,
  buildWebPageJsonLd,
} from "@/json-ld/schema";

describe("buildBreadcrumbJsonLd", () => {
  test("produces valid structure", () => {
    const result = buildBreadcrumbJsonLd({
      items: [{ name: "Home", path: "/" }],
    });
    expect(result).toMatchObject({
      "@graph": [
        {
          itemListElement: [{ item: "https://example.com/" }],
        },
      ],
    });
  });
});

describe("JSON-LD identifiers", () => {
  test("matches WebSite @id with WebPage isPartOf @id", () => {
    const siteSchema = buildSiteJsonLd();
    const pageSchema = buildWebPageJsonLd({
      pageTitle: "About | Next Start",
      pageDescription: "About page",
      pagePath: ROUTE_PATHS.about,
    });

    const siteGraph = siteSchema["@graph"] as unknown as readonly Record<
      string,
      unknown
    >[];
    const pageGraph = pageSchema["@graph"] as unknown as readonly Record<
      string,
      unknown
    >[];

    const webSiteNode = siteGraph.find((node) => node["@type"] === "WebSite");
    const webPageNode = pageGraph.find((node) => node["@type"] === "WebPage");
    const isPartOf = webPageNode?.isPartOf as
      | Record<string, unknown>
      | undefined;

    expect(webSiteNode).toBeDefined();
    expect(webPageNode).toBeDefined();
    expect(isPartOf?.["@id"]).toBe(webSiteNode?.["@id"]);
  });
});
