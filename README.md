# ⚡ Next Start

A production-ready **Next.js 16 + React 19** starter with **SEO defaults**, **type-safe API plumbing (Elysia + Eden)**, and **Sentry monitoring** prewired across client/server/edge runtimes. 🚀🧠🛡️

## 🆕 What Changed Recently

- 🛡️ Added Sentry integration (`@sentry/nextjs`) with Next config wrapping and runtime instrumentation.
- 🌐 Added runtime/client/server Sentry env validation via T3 Env + Zod.
- 🧭 Simplified the app to a **single homepage route** (`/`) and removed `about/products/contact` demo routes.
- 🗺️ Updated `robots.ts`, `sitemap.ts`, `manifest.ts`, and error pages to match home-only routing.
- 🧪 Added a Bun smoke test for the Elysia API route.
- 🤖 Added `.mcp.json` and `.cursor/mcp.json` templates for Sentry MCP connection.
- 📄 Added `.env.example` and updated `.gitignore` to allow committing it.

## ✨ Feature Set

- 🚀 Next.js 16 App Router + React 19
- 🎨 Tailwind CSS 4
- 🧪 Type-safe API flow: Elysia server + Eden client
- 📘 OpenAPI docs from the same Elysia instance
- 🛡️ Sentry monitoring (client, server, edge, request errors, router transitions)
- 📝 TypeScript + typed routes (`next typegen`)
- 🔒 T3 Env + Zod env validation
- 🔍 SEO defaults: metadata, `sitemap.xml`, `robots.txt`, Open Graph image
- 💾 Cache Components (`cacheComponents: true`)
- ⚡ Bun scripts + Ultracite (Oxlint + Oxfmt) + Husky/lint-staged

## 🧭 Current App Shape

- 🏠 UI route: `/`
- 🔌 API route bridge: `/api/*` through `src/app/api/[[...slugs]]/route.ts`
- 📘 OpenAPI UI: `/api/openapi`
- 🧾 OpenAPI JSON: `/api/openapi/json`
- 🗺️ Sitemap currently contains only homepage
- 🤖 Robots allow `/` and point to generated sitemap

## 📁 Key Files

```txt
src/
  app/
    page.tsx
    layout.tsx
    api/[[...slugs]]/route.ts
    sitemap.ts
    robots.ts
    manifest.ts
    error.tsx
    not-found.tsx
  server/api/elysia.ts
  api/eden.ts
  tests/unit/api-smoke.test.ts
  instrumentation.ts
  instrumentation-client.ts
sentry.server.config.ts
sentry.edge.config.ts
next.config.ts
.env.example
```

## 🚀 Quick Start

```bash
bun install
cp .env.example .env.local
bun dev
```

Open [http://localhost:3000](http://localhost:3000). 🎉

## 🔐 Environment Variables

Copy values from `.env.example` and set real credentials:

| Variable                 | Required | Purpose                                      |
| ------------------------ | -------- | -------------------------------------------- |
| `NEXT_PUBLIC_SENTRY_DSN` | ✅       | Client-side Sentry DSN                       |
| `SENTRY_ORG`             | ✅       | Sentry org slug for build plugin/source maps |
| `SENTRY_PROJECT`         | ✅       | Sentry project slug                          |
| `SENTRY_AUTH_TOKEN`      | ✅       | Auth token for Sentry source map upload      |

Also used automatically (via Vercel preset): `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL`, `VERCEL_ENV`. 🌍

## 🛡️ Sentry Setup Notes

- `next.config.ts` is wrapped with `withSentryConfig(...)` and uses `SENTRY_ORG` + `SENTRY_PROJECT`.
- `src/instrumentation.ts` registers runtime configs for Node/Edge and exports `onRequestError`.
- `src/instrumentation-client.ts` initializes browser-side Sentry, replay integration, and router transition tracking.
- `sentry.server.config.ts` and `sentry.edge.config.ts` are present and initialized.

## 🔌 API Layer (Elysia + Eden + OpenAPI)

- 🧠 Elysia app: `src/server/api/elysia.ts`
- 🌉 Next route bridge: `src/app/api/[[...slugs]]/route.ts`
- ⚙️ Eden client: `src/api/eden.ts`

Sample endpoints:

- `GET /api` → `"Hello Nextjs"` 👋
- `POST /api` with `{ "name": "Eden" }` → echoes payload 🔁

OpenAPI is generated from the same Elysia app:

- 🖥️ UI: [http://localhost:3000/api/openapi](http://localhost:3000/api/openapi)
- 🧾 JSON: [http://localhost:3000/api/openapi/json](http://localhost:3000/api/openapi/json)

## 🔍 SEO + Metadata

- 🏷️ Base metadata: `src/app/layout.tsx`
- 🗺️ Sitemap: `src/app/sitemap.ts` (home only)
- 🤖 Robots: `src/app/robots.ts`
- 📱 Web manifest: `src/app/manifest.ts`
- 🖼️ Open Graph image route: `src/app/opengraph-image.tsx`

## 📦 Scripts

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `bun dev`             | 🟢 Start dev server                     |
| `bun build`           | 📦 Build production bundle              |
| `bun start`           | 🚀 Run production server                |
| `bun run lint`        | 🔍 Run Ultracite checks                 |
| `bun run format`      | ✏️ Auto-fix formatting/lint issues      |
| `bun run typegen`     | 🛤️ Generate typed routes                |
| `bun run typecheck`   | 🧠 Run type checks (includes `typegen`) |
| `bun run test`        | ✅ Run tests                            |
| `bun run test:watch`  | 👀 Run tests in watch mode              |
| `bun run lint:staged` | 🧪 Run staged-file checks               |
| `bun run prepare`     | 🪝 Install Husky hooks                  |

## ✅ CI Quality Gate

GitHub Actions (`.github/workflows/ci.yml`) runs:

1. `bun install --frozen-lockfile`
2. `bun ultracite check`
3. `bun run typecheck`
4. `bun test`
5. `bun run build`

## 🧪 Testing

- ✅ Bun test preload is configured via `bunfig.toml` and `src/tests/setup.ts`.
- ✅ Current smoke coverage: `src/tests/unit/api-smoke.test.ts` (`GET /api`).

## 🤖 MCP Config (Optional)

Two config templates are included for Sentry MCP wiring:

- `.mcp.json`
- `.cursor/mcp.json`

Both point to: `https://mcp.sentry.dev/mcp/<org>/<project>` (replace placeholders). 🔧

## 🛠️ Customization Checklist

1. 🏷️ Update product/site strings in `src/constants/metadata.ts`.
2. 🎨 Adapt homepage UI in `src/app/_components/page/hero-section.tsx`.
3. 🧭 Expand nav/footer in `src/app/_components/layout/nav.tsx` and `src/app/_components/layout/footer.tsx`.
4. 🔌 Add API endpoints/schemas in `src/server/api/elysia.ts`.
5. 🗺️ If adding routes, also update `sitemap.ts`, metadata, and related tests.
6. 🛡️ Tune Sentry sampling/replay settings for production.

## 🔗 Useful Links

- 📘 [Next.js Docs](https://nextjs.org/docs)
- 🔌 [Elysia Next.js Integration](https://elysiajs.com/integrations/nextjs.html)
- 📘 [Elysia OpenAPI Pattern](https://elysiajs.com/patterns/openapi.html)
- 🧠 [Eden Docs](https://elysiajs.com/eden/installation.html)
- 🛡️ [Sentry for Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- 🛠️ [Project Instructions (`AGENTS.md`)](./AGENTS.md)

## 📄 License

MIT
