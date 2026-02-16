import { describe, expect, test } from "bun:test";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { ROUTE_PATHS } from "@/constants/metadata";

const siteUrl = "https://example.com";
const ogImageUrl = `${siteUrl}/opengraph-image`;
const nonHomeRoutePaths = [
  ROUTE_PATHS.about,
  ROUTE_PATHS.products,
  ROUTE_PATHS.contact,
] as const;

describe("metadata routes", () => {
  test("robots includes allow root and sitemap URL", () => {
    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: "*",
        allow: ROUTE_PATHS.home,
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    });
  });

  test("sitemap includes home entry without images", () => {
    const result = sitemap();
    const entriesByUrl = new Map(result.map((entry) => [entry.url, entry]));
    const homeUrl = `${siteUrl}${ROUTE_PATHS.home}`;

    expect(result).toHaveLength(4);
    expect(entriesByUrl.get(homeUrl)).toBeDefined();
    expect(entriesByUrl.get(homeUrl)?.images).toBeUndefined();
  });

  test("sitemap includes OG image for non-home entries", () => {
    const result = sitemap();
    const entriesByUrl = new Map(result.map((entry) => [entry.url, entry]));

    for (const path of nonHomeRoutePaths) {
      const url = `${siteUrl}${path}`;
      expect(entriesByUrl.get(url)).toBeDefined();
      expect(entriesByUrl.get(url)?.images).toEqual([ogImageUrl]);
    }
  });
});
