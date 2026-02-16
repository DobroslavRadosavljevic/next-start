import { mock } from "bun:test";

mock.module("@/config/env", () => ({
  getSiteUrl: () => "https://example.com",
}));
