# ⚡ Next Start

A production-ready **Next.js 16 + React 19** starter powered by **Bun**, **TypeScript**, and **Tailwind CSS**, with a concise API + observability baseline already wired. 🚀🧠🛡️

## ✨ What’s in this starter

- 🚀 **Next.js 16 App Router** + React 19
- 🧱 **Cache Components** enabled (`cacheComponents: true`)
- 🎨 `tailwindcss` 4 + reusable UI component primitives
- 🧪 **Type-safe API** with **Elysia + Eden**
- 📘 **OpenAPI docs** generated from the same API layer
- 🛡️ End-to-end **Sentry monitoring** (client / server / edge) + request errors
- 📈 Built-in **Vercel Analytics** and **Speed Insights**
- 🔍 SEO defaults (`metadata`, `sitemap`, `robots`, `manifest`, OG image)
- 🧰 **Zod + T3 Env** configuration with server URL helpers

## 🧭 Current app shape

- 🏠 Main UI route: `/`
- 🔌 API entrypoint: `src/app/api/[[...slugs]]/route.ts` (passes methods to Elysia)
- 🧠 API implementation: `src/server/api/elysia.ts`
- 📘 OpenAPI UI: `/api/openapi`
- 🧾 OpenAPI JSON: `/api/openapi/json`
- 🗺️ SEO routes:
  - `/sitemap.xml`
  - `/robots.txt`
  - `/manifest.webmanifest`
  - `/opengraph-image.png`
- ⚠️ Error + loading surfaces:
  - `src/app/error.tsx`
  - `src/app/global-error.tsx`
  - `src/app/not-found.tsx`
  - `src/app/loading.tsx`

## 📁 Key files

```txt
src/
  app/
    _components/
      layout/
        footer.tsx
        header.tsx
        nav.tsx
      page/
        hero-section.tsx
    api/[[...slugs]]/route.ts
    error.tsx
    global-error.tsx
    layout.tsx
    loading.tsx
    manifest.ts
    not-found.tsx
    opengraph-image.tsx
    page.tsx
    robots.ts
    sitemap.ts
  api/
    eden.ts
  config/
    env.ts
  constants/
    metadata.ts
  server/
    api/
      elysia.ts
  tests/
    setup.ts
    unit/
      api-smoke.test.ts
  styles/
    globals.css
  instrumentation.ts
  instrumentation-client.ts
components/
  ui/
    ...
sentry.edge.config.ts
sentry.server.config.ts
next.config.ts
.env.example
```

## 🚀 Quick start

```bash
bun install
cp .env.example .env.local
bun dev
```

Open [http://localhost:3000](http://localhost:3000). 🎉

## 🧪 API flow (Elysia + Eden + OpenAPI)

- 🧠 Elysia app: `src/server/api/elysia.ts`
  - `GET /api` → `"Hello Nextjs"`
  - `POST /api` with `{ "name": "Eden" }` → echoes payload
- 🌉 Next API bridge: `src/app/api/[[...slugs]]/route.ts`
- ⚙️ Eden client: `src/api/eden.ts`
- 🧪 Smoke test: `src/tests/unit/api-smoke.test.ts`

## 🔐 Environment variables

Source of truth: `src/config/env.ts`.

| Variable                 | Required | Purpose                                   |
| ------------------------ | -------- | ----------------------------------------- |
| `NEXT_PUBLIC_SENTRY_DSN` | ✅       | Sentry DSN used by client instrumentation |
| `SENTRY_ORG`             | ✅       | Sentry org for source-map upload plugin   |
| `SENTRY_PROJECT`         | ✅       | Sentry project for source-map upload      |
| `SENTRY_AUTH_TOKEN`      | ✅       | Token used for Sentry source-map upload   |

Vercel preset vars are used automatically when present:

- `VERCEL_PROJECT_PRODUCTION_URL`
- `VERCEL_URL`
- `VERCEL_ENV`

## 🛡️ Observability setup

- `next.config.ts` wraps the config with `withSentryConfig(...)`
- `src/instrumentation.ts` loads node/edge Sentry config at runtime and exports `onRequestError`
- `src/instrumentation-client.ts` enables browser Sentry, replay integration, and router transitions
- `sentry.server.config.ts` + `sentry.edge.config.ts` initialize Sentry in server/edge
- `src/app/layout.tsx` includes Analytics + Speed Insights

## 📦 Available scripts

| Command              | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `bun dev`            | 🟢 Start development server                            |
| `bun build`          | 📦 Build production bundle                             |
| `bun start`          | 🚀 Start production server                             |
| `bun run lint`       | 🔍 Run `ultracite check`                               |
| `bun run format`     | ✏️ Run `ultracite fix`                                 |
| `bun run typegen`    | 🗺️ Generate typed routes                               |
| `bun run typecheck`  | 🧠 Typecheck (`pretypecheck` runs `bun run typegen`)   |
| `bun run test`       | ✅ Run Bun test suite (`src/tests/setup.ts` preloaded) |
| `bun run test:watch` | 👀 Run tests in watch mode                             |

## ✅ CI quality gate

The workflow in `.github/workflows/ci.yml` runs:

1. `bun install --frozen-lockfile`
2. `bun ultracite check`
3. `bun run typecheck`
4. `bun run test`
5. `bun run build`

## 🤖 MCP configuration

- `.mcp.json` is included for Sentry MCP:
  - `https://mcp.sentry.dev/mcp/<org>/<project>`
- Update `<org>` and `<project>` before use.

## 🛠️ Customization checklist

1. 🏷️ Update site/product text in `src/constants/metadata.ts`.
2. 🎨 Replace `src/app/_components/page/hero-section.tsx` with your homepage UI.
3. 🧭 Expand shared layout in `src/app/_components/layout/`.
4. 🔌 Add API endpoints/schemas in `src/server/api/elysia.ts`.
5. 🗺️ Add new routes and keep `sitemap.ts` + SEO metadata in sync.
6. 🛡️ Tune Sentry sampling/replay and trace settings for production.

## 🔗 Useful links

- 📘 [Next.js docs](https://nextjs.org/docs)
- 🧩 [Elysia docs](https://elysiajs.com)
- 🧠 [Eden docs](https://elysiajs.com/eden/installation.html)
- 🛡️ [Sentry for Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- 🛠️ [Project instructions (`AGENTS.md`)](./AGENTS.md)

## 📄 License

MIT
