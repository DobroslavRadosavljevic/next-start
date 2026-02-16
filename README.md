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

## 📁 Project Structure

```
src/
├── app/
│   ├── _components/
│   │   ├── layout/         # Header, footer — imported by root layout
│   │   └── page/           # Homepage-only components (e.g. hero-section)
│   ├── about/
│   │   ├── _components/page/  # About page components
│   │   └── page.tsx
│   ├── products/
│   │   ├── _components/page/  # Products page components
│   │   └── page.tsx
│   ├── contact/
│   │   ├── _components/page/  # Contact page components
│   │   └── page.tsx
│   ├── loading.tsx         # Global loading UI (skeleton)
│   ├── error.tsx           # Route-level error boundary (retry / go home)
│   ├── global-error.tsx    # Root error boundary (fallback HTML)
│   ├── not-found.tsx       # 404 page
│   ├── manifest.ts         # PWA manifest
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   ├── opengraph-image.tsx # Dynamic OG image (1200×630)
│   ├── layout.tsx          # Root layout (metadata, JSON-LD, ViewTransition, Analytics)
│   └── globals.css         # Tailwind + CSS vars (light/dark)
├── components/
│   ├── nav.tsx             # Fixed header nav (Home, About, Products, Contact)
│   └── json-ld.tsx        # JSON-LD script injector
├── config/
│   ├── env.ts              # T3 Env (NEXT_PUBLIC_SITE_URL)
│   └── fonts.ts            # Geist Sans + Mono (next/font/google)
├── constants/
│   └── metadata.ts         # SITE_NAME, SITE_DESCRIPTION, page constants
└── json-ld/
    ├── schema.ts           # buildSiteJsonLd + buildWebPageJsonLd + buildBreadcrumbJsonLd
    └── utils.ts            # serializeJsonLd (XSS-safe)
```

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
