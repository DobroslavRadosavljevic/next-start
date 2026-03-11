# Next Start Repository Guide

## Stack Snapshot

- Runtime: Next.js 16.1.6, React 19.2.4, Bun.
- Quality tooling: Ultracite (`ultracite check` / `ultracite fix`), `tsgo --noEmit`, Bun test.
- API stack: Elysia + Eden + `@elysiajs/openapi`.
- Monitoring/runtime integrations: Sentry, Vercel Analytics, Vercel Speed Insights.
- UI stack: shadcn `base-nova` registry, `@base-ui/react` primitives, Tailwind CSS v4, `class-variance-authority`, Hugeicons.

## Repo Map

- App Router lives in `src/app`.
- Current route surface is intentionally small:
  - `/` from `src/app/page.tsx`
  - catch-all API bridge from `src/app/api/[[...slugs]]/route.ts`
  - framework boundary files in `src/app/error.tsx`, `src/app/global-error.tsx`, `src/app/loading.tsx`, `src/app/not-found.tsx`
  - metadata routes in `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts`, `src/app/opengraph-image.tsx`
- Global shell lives in `src/app/layout.tsx`.
- Global layout UI lives in `src/app/_components/layout`.
- Route-local page UI lives in `src/app/_components/page`.
- Reusable UI primitives live in `src/components/ui`.
- Shared metadata strings live in `src/constants/metadata.ts`.
- Environment parsing and canonical URL helpers live in `src/config/env.ts`.
- API source of truth lives in `src/server/api/elysia.ts`.
- Eden client wiring lives in `src/api/eden.ts`.
- Global styling and tokens live in `src/styles/globals.css`.
- Test bootstrap lives in `src/tests/setup.ts`.

## Commands

- Dev: `bun dev`
- Build: `bun run build`
- Start: `bun start`
- Lint: `bun run lint`
- Format: `bun run format`
- Typed routes: `bun run typegen`
- Typecheck: `bun run typecheck`
- Test: `bun run test`
- Test watch: `bun run test:watch`

## Workflow

- For non-trivial tasks, split discovery across parallel agents when it helps, then consolidate findings before editing.
- The coordinator owns final edits, integration decisions, and full verification runs.
- Do not treat this starter as a generic scaffold; inspect the current repo before changing docs or policy.
- Prefer Bun-native commands and existing repo scripts over ad hoc equivalents.

## Architecture Rules

- Keep `src/app/api/[[...slugs]]/route.ts` as a thin transport bridge. API logic belongs in `src/server/api/elysia.ts`.
- Keep shared SEO/site identity in `src/constants/metadata.ts` and canonical URL generation in `src/config/env.ts`. Do not hardcode site URLs across metadata files.
- If you add routes, keep route-specific UI close to the route and preserve the split between global shell code and route-local page components.
- `src/app/_components/page/hero-section.tsx` is currently an async server component that exercises the Eden API bridge. Keep server/client boundaries explicit when extending that pattern.
- `src/api/eden.ts` uses the local Elysia app on the server and `getSiteUrl()` in the browser. Preserve that split when refactoring API access.

## UI Rules

- Treat the UI system as `shadcn/base-nova + @base-ui/react + Tailwind v4`, not generic shadcn/Radix.
- Prefer extending existing primitives in `src/components/ui` over adding another component framework or parallel abstraction layer.
- Keep app-specific composition in `src/app/_components/**`; keep reusable primitives in `src/components/ui/**`.
- Reuse `cn` from `src/lib/utils.ts` and existing `cva` / `data-slot` patterns instead of inventing new class composition helpers.
- Keep design tokens, theme variables, and Tailwind theme wiring in `src/styles/globals.css`, not scattered through route files.
- Font baseline is `Geist` from `next/font/google` in `src/app/layout.tsx`.
- `src/components/ui/sonner.tsx` depends on `next-themes`, but the current root layout does not mount a `ThemeProvider` or `Toaster`. Do not assume toast/theme wiring is active unless you wire it intentionally.

## Config, Env, and Observability

- `next.config.ts` is part of the runtime contract. It currently enables `cacheComponents`, `typedRoutes`, several `experimental` flags, and wraps the app with `withSentryConfig(...)`.
- Because `next.config.ts` imports `src/config/env.ts`, Next startup/build commands validate env early. Keep `.env.example` aligned with real requirements.
- Required app env vars are currently:
  - `NEXT_PUBLIC_SENTRY_DSN`
  - `SENTRY_ORG`
  - `SENTRY_PROJECT`
  - `SENTRY_AUTH_TOKEN`
- Preserve Sentry wiring in `src/instrumentation.ts`, `src/instrumentation-client.ts`, `sentry.server.config.ts`, and `sentry.edge.config.ts` unless the task explicitly changes monitoring.
- Root layout currently mounts `TooltipProvider`, `Analytics`, `SpeedInsights`, and `ViewTransition`. Keep shell-level runtime integrations centralized there.

## Testing and Gates

- CI order is: `bun install --frozen-lockfile` -> `bun ultracite check` -> `bun run typecheck` -> `bun run test` -> `bun run build`.
- Match CI locally when verifying non-trivial work: lint -> typecheck -> test -> build.
- `bun run typecheck` depends on typed route generation. Use repo scripts rather than bypassing them.
- Bun preloads `src/tests/setup.ts`; keep test env assumptions there.
- Keep at least one committed smoke test. This starter has regressed before when Bun found zero tests.
- New tests can live beside the feature or under `src/tests`.

## Commit Hygiene

- There are no in-repo git hooks. Hygiene is script-driven, not hook-driven.
- Before committing, run `bun run format`, `bun run lint`, `bun run typecheck`, and any task-specific verification the change needs.

## Reference Docs

- shadcn/ui docs index: `https://ui.shadcn.com/llms.txt`
