import { openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { z } from "zod";

export const api = new Elysia({ prefix: "/api" })
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
    })
  )
  .get("/", "Hello Nextjs")
  .post("/", ({ body }) => body, {
    body: z.object({
      name: z.string(),
    }),
  });
