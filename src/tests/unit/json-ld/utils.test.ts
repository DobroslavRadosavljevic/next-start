import type { Thing, WebSite, WithContext } from "schema-dts";

import { describe, expect, test } from "bun:test";

import { serializeJsonLd } from "@/json-ld/utils";

describe("serializeJsonLd", () => {
  test("escapes < to prevent XSS", () => {
    const thing: WithContext<Thing> = {
      "@context": "https://schema.org",
      "@type": "Thing",
    };
    expect(serializeJsonLd(thing)).not.toContain("<");

    const thingWithAngleBrackets: WithContext<Thing> = {
      "@context": "https://schema.org",
      "@type": "Thing",
      name: "<script>",
    };
    expect(serializeJsonLd(thingWithAngleBrackets)).toContain("\\u003c");
  });

  test("preserves valid JSON structure", () => {
    const input: WithContext<WebSite> = {
      "@context": "https://schema.org",
      "@type": "WebSite",
    };
    expect(JSON.parse(serializeJsonLd(input))).toEqual(input);
  });
});
