# ⚡ Next Start

A modern Next.js starter template — production-ready, type-safe, and SEO-friendly.

## ✨ Features

- 🚀 **Next.js 16** — App Router, React 19
- 🎨 **Tailwind CSS 4** — Utility-first styling with `@theme inline` and CSS variables
- 📝 **TypeScript** — Full type safety
- 🔒 **T3 Env** — Validated env vars with Zod (extends Vercel preset)
- 🛤️ **Typed routes** — `next typegen` for route safety
- 🔍 **SEO** — Metadata, sitemap, robots.txt, OG image, JSON-LD
- ✨ **View Transitions** — React 19 `ViewTransition` + CSS animations (fade + slide)
- 💾 **Cache Components** — PPR (Partial Prerendering) via `cacheComponents: true`
- 📊 **Vercel** — Analytics and Speed Insights wired in
- 🛠️ **Ultracite** — Oxlint + Oxfmt, zero-config quality
- ⚡ **Bun** — Package manager

## 🚀 Quick Start

```bash
bun install
bun dev
```

🌐 Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Scripts

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `bun dev`             | 🟢 Start dev server                     |
| `bun build`           | 📦 Production build                     |
| `bun start`           | 🚀 Start production server              |
| `bun ultracite fix`   | ✏️ Format & fix lint issues             |
| `bun ultracite check` | 🔍 Check code quality (CI lint)         |
| `bun run lint:staged` | 🧪 Run staged checks via lint-staged    |
| `bun typecheck`       | 📝 Run TypeScript check (incl. typegen) |
| `bun typegen`         | 🛤️ Generate Next.js route types         |
| `bun run prepare`     | 🪝 Install Husky Git hooks              |

## 🔧 Next.js Config Highlights

- 💾 `cacheComponents: true` — Cache Components (PPR)
- 🛤️ `typedRoutes: true` — Type-safe routing
- ✨ `experimental.viewTransition: true`
- 🔐 `experimental.authInterrupts: true` — `forbidden()` / `unauthorized()`
- ⏱️ `experimental.staleTimes` — Router cache tuning
- 🧹 `compiler.removeConsole` in production
- 🙈 `poweredByHeader: false`

## 🎨 Theming

- 🎨 `globals.css` defines `--background` and `--foreground`
- 🔗 `@theme inline` maps them to Tailwind `bg-background`, `text-foreground`
- 🌙 `prefers-color-scheme: dark` for system dark mode

## 🛠️ Customization

1. 📝 **Metadata** — Edit `src/constants/metadata.ts` (site + route metadata constants)
2. 🔒 **Env vars** — Add entries in `src/config/env.ts`, create `.env.local` (e.g. `NEXT_PUBLIC_SITE_URL`)
3. 📱 **Manifest** — PWA config in `src/app/manifest.ts`
4. 🗺️ **Sitemap** — Extend `src/app/sitemap.ts` with more routes
5. 🧭 **Nav** — Update `pages` array in `src/components/nav.tsx`

## 📄 License

📜 MIT — use it for anything. Contributions welcome.

## 🔗 CI

⚙️ GitHub Actions workflow (`.github/workflows/ci.yml`): install → typecheck → lint → build on push/PR to `main`.

## 🔗 Links

- 📘 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs)
- 🔒 [T3 Env](https://env.t3.gg)
- 🛠️ [Ultracite / AGENTS.md](./AGENTS.md) — Code standards & Ultracite usage
