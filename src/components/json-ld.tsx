import type { Graph, Thing, WithContext } from "schema-dts";

import { serializeJsonLd } from "@/json-ld/utils";

interface JsonLdProps {
  data: WithContext<Thing> | Graph;
}

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    async
    type="application/ld+json"
    // oxlint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
  />
);
