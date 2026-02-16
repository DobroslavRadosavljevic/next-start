import { treaty } from "@elysiajs/eden";

import { getSiteUrl } from "@/config/env";
import { api } from "@/server/api/elysia";

export const eden =
  typeof process === "undefined"
    ? treaty<typeof api>(getSiteUrl()).api
    : treaty(api).api;
