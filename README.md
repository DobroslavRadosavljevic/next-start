# ⚡ Next Start

A production-ready Next.js 16 starter with SEO defaults, modern DX, and an integrated type-safe API layer powered by Elysia + Eden.

## ✨ Features

- 🚀 Next.js 16 App Router + React 19
- 🎨 Tailwind CSS 4
- 📝 TypeScript + typed routes (`next typegen`)
- 🔒 T3 Env + Zod-based env validation
- 🔍 SEO setup: metadata, sitemap, robots, Open Graph image, JSON-LD
- 💾 Cache Components enabled (`cacheComponents: true`)
- 🔌 Elysia API integrated through App Router route handlers
- 📘 OpenAPI docs via `@elysiajs/openapi`
- 🧠 Eden typed client via `@elysiajs/eden`
- 🛠️ Ultracite (Oxlint + Oxfmt) for formatting and linting
- ⚡ Bun for package management and scripts

## 🚀 Quick Start

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🔌 Elysia API Integration

Elysia is wired through:

- 🧠 Core Elysia app: `src/server/api/elysia.ts`
- 🌉 Next.js route bridge: `src/app/api/[[...slugs]]/route.ts` (exports `api.fetch` for all methods)

Current sample endpoints:

- `GET /api` -> `"Hello Nextjs"` 👋
- `POST /api` with body `{ "name": "..." }` -> echoes the same body 🔁

The route bridge exports all major HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`, `HEAD`) through `api.fetch`.

## 📘 OpenAPI

OpenAPI is enabled in the same Elysia app using `@elysiajs/openapi`.

- 🖥️ UI: [http://localhost:3000/api/openapi](http://localhost:3000/api/openapi)
- 🧾 JSON spec: [http://localhost:3000/api/openapi/json](http://localhost:3000/api/openapi/json)

Zod schemas are mapped for OpenAPI generation using:

- 🧩 `mapJsonSchema.zod = z.toJSONSchema`

## 🧠 Eden Typed Client

The Eden client is configured in:

- 📍 `src/api/eden.ts`

It uses the Next.js integration pattern:

- 🖥️ Server/build time: direct in-process calls with `treaty(api).api`
- 🌐 Browser/client time: network calls with `treaty<typeof api>(getSiteUrl()).api`

Home page includes a small example call through Eden in:

- `src/app/_components/page/hero-section.tsx`

## 📦 Scripts

| Command               | Description                                |
| --------------------- | ------------------------------------------ |
| `bun dev`             | 🟢 Start development server                |
| `bun build`           | 📦 Build for production                    |
| `bun start`           | 🚀 Start production server                 |
| `bun run typegen`     | 🛤️ Generate Next.js typed routes           |
| `bun run typecheck`   | 📝 Run TypeScript check (includes typegen) |
| `bun ultracite fix`   | ✏️ Auto-fix formatting and lint issues     |
| `bun ultracite check` | 🔍 Run formatting/lint checks              |
| `bun run lint:staged` | 🧪 Run staged-file checks                  |
| `bun run test`        | ✅ Run Bun tests                           |
| `bun run prepare`     | 🪝 Install Husky hooks                     |

## ✅ Quality Gates

CI (`.github/workflows/ci.yml`) runs:

1. `bun install --frozen-lockfile`
2. `bun ultracite check`
3. `bun run typecheck`
4. `bun test`
5. `bun run build`

## 🛠️ Customization

1. 📝 Edit metadata constants in `src/constants/metadata.ts`
2. 🔒 Add env vars in `src/config/env.ts` and local values in `.env.local`
3. 🗺️ Extend `src/app/sitemap.ts` and `src/app/robots.ts`
4. 🧭 Adjust navigation in `src/app/_components/layout/nav.tsx`
5. 🧠 Expand Elysia routes/schemas in `src/server/api/elysia.ts`
6. 🌉 Adjust API bridge exports in `src/app/api/[[...slugs]]/route.ts` if API mounting changes

## 🔗 Links

- 📘 [Next.js docs](https://nextjs.org/docs)
- 🔌 [Elysia Next.js integration](https://elysiajs.com/integrations/nextjs.html)
- 📘 [Elysia OpenAPI pattern](https://elysiajs.com/patterns/openapi.html)
- 🧠 [Eden installation](https://elysiajs.com/eden/installation.html)
- 🛠️ [Ultracite / AGENTS instructions](./AGENTS.md)

## 📄 License

MIT
