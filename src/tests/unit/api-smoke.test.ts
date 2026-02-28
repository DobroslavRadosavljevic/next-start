import { describe, expect, test } from "bun:test";

import { api } from "@/server/api/elysia";

describe("API smoke tests", () => {
  test("GET /api returns hello message", async () => {
    const response = await api.handle(new Request("http://localhost/api"));

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("Hello Nextjs");
  });
});
