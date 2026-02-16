import { describe, expect, test } from "bun:test";

import { buildBreadcrumbJsonLd } from "@/json-ld/schema";

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
