import type { Graph, Thing, WithContext } from "schema-dts";

/**
 * Serialize JSON-LD for safe injection into HTML.
 * Replaces `<` with `\u003c` to prevent XSS (per Next.js docs).
 */
export const serializeJsonLd = (json: WithContext<Thing> | Graph): string =>
  JSON.stringify(json).replaceAll("<", "\\u003c");
