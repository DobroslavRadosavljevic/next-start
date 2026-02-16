import { describe, expect, test } from "bun:test";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

const siteUrl = "https://example.com";

describe("metadata routes", () => {
  test("robots includes allow root and sitemap URL", () => {
    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    });
  });

  test("sitemap includes home entry without images", () => {
    const result = sitemap();
    const entriesByUrl = new Map(result.map((entry) => [entry.url, entry]));
    const homeUrl = `${siteUrl}/`;

    expect(result).toHaveLength(1);
    expect(entriesByUrl.get(homeUrl)).toBeDefined();
    expect(entriesByUrl.get(homeUrl)?.images).toBeUndefined();
  });
});
