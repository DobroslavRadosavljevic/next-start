# Ultracite + Next Start Repository Guide

This repository currently uses Next.js 16 + React 19 with Bun, Ultracite, Sentry, and an Elysia/Eden API layer.

## Scope

- App Router lives under `src/app`.
- Current UI shape is a single homepage route (`/`) rendered by `src/app/page.tsx`.
- API requests are bridged through `src/app/api/[[...slugs]]/route.ts`.
- API definitions live in `src/server/api/elysia.ts`, and the client is in `src/api/eden.ts`.
- Shared site metadata strings are in `src/constants/metadata.ts`.
- Environment parsing/validation is in `src/config/env.ts`.
- Runtime monitoring is configured through `src/instrumentation.ts`, `src/instrumentation-client.ts`, `sentry.server.config.ts`, and `sentry.edge.config.ts`.

## Quick Reference

- **Develop**: `bun dev`
- **Build**: `bun build`
- **Start**: `bun start`
- **Lint**: `bun run lint` (runs `ultracite check`)
- **Format**: `bun run format` (runs `ultracite fix`)
- **Generate typed routes**: `bun run typegen`
- **Typecheck**: `bun run typecheck` (runs `typegen` first via `pretypecheck`)
- **Test**: `bun run test`
- **Test (watch)**: `bun run test:watch`
- **Run staged checks**: `bun run lint:staged`
- **Install hooks**: `bun run prepare`

Oxlint + Oxfmt handle most formatting/lint issues automatically through Ultracite.

## Current Architecture Notes

- `next.config.ts` enables `cacheComponents: true` and `typedRoutes: true`.
- Sentry is wired via `withSentryConfig(...)` in `next.config.ts`.
- OpenAPI is generated from the same Elysia app (`@elysiajs/openapi`).
- App metadata routes are implemented in:
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
  - `src/app/manifest.ts`
  - `src/app/opengraph-image.tsx`
- UI layout components are in `src/app/_components/layout/`.
- Homepage-specific UI components are in `src/app/_components/page/`.

## Core Principles

Write code that is accessible, performant, type-safe, and maintainable.

### Type Safety & Explicitness

- Use explicit types when they improve clarity.
- Prefer `unknown` over `any` when the type is truly unknown.
- Use `const` assertions (`as const`) for immutable literals.
- Prefer narrowing over unnecessary type assertions.
- Avoid magic values and unclear naming.

### Modern JavaScript/TypeScript

- Use `const` by default; use `let` only when reassignment is needed.
- Use optional chaining and nullish coalescing where helpful.
- Prefer template literals over manual string concatenation.
- Favor object/array destructuring when it improves readability.

### Async & Promises

- Prefer `async`/`await` for async control flow.
- Await promises intentionally and handle failures clearly.
- Avoid async Promise executor functions.

### React & JSX

- Prefer focused function components.
- Keep hooks at top level (never in conditionals/loops).
- Use semantic HTML and meaningful ARIA where needed.
- Provide stable keys for lists.

### Error Handling

- Throw `Error` objects, not strings.
- Use early returns to simplify control flow.
- Remove debug-only logs unless intentionally needed (for example, monitored reporting paths).

### Security

- Add `rel="noopener noreferrer"` when using `target="_blank"`.
- Use `dangerouslySetInnerHTML` only when required and with sanitized/controlled input.
- Validate and sanitize external inputs.

### Performance

- Prefer specific imports.
- Keep render logic and class computation lightweight.
- Use framework-native optimizations (App Router metadata, cache components, typed routes).

## Project Conventions

- Use `getSiteUrl()` from `src/config/env.ts` for canonical/base URL generation.
- Use font config from `src/config/fonts.ts` via `bodyFontClass`.
- Keep global layout shell in `src/app/layout.tsx` and route-specific UI close to each route.
- If additional routes are introduced, follow `{route}/_components/page/` for route-local page components.

## Kuzenbo Enforcement (Repo-Wide)

- Treat Kuzenbo as the default UI system across the whole codebase.
- Use only public Kuzenbo package surfaces for app UI/runtime work:
  - `@kuzenbo/core/ui/*` for components
  - `@kuzenbo/core/provider` (and `@kuzenbo/core/size` when needed) for provider/size helpers
  - `@kuzenbo/theme` for theme runtime (`ThemeBootstrapScript`, `ThemeProvider`)
  - `@kuzenbo/styles/recommended.css` for baseline styles
  - `@kuzenbo/hooks` for reusable browser/state hooks
  - `@kuzenbo/notifications/ui/toast` for toast flows
  - `@kuzenbo/charts/ui/*` for charts
- Keep theme + styles wiring active in app root at all times:
  - import one prebuilt theme CSS entrypoint
  - import `@kuzenbo/styles/recommended.css` after theme CSS
- Prefer semantic Kuzenbo tokens/utilities instead of ad-hoc equivalents (for colors, z-index, cursor, chart colors, etc.).
- Do not introduce non-Kuzenbo component systems or copy private internals from package `src`/`dist` files into app code.
- If a requested component/pattern is missing from Kuzenbo exports, compose from existing Kuzenbo primitives first and explicitly document the fallback tradeoff.
- When touching existing UI code, migrate non-Kuzenbo patterns toward Kuzenbo surfaces rather than expanding divergence.

## CI and Quality Gates

- CI workflow: `.github/workflows/ci.yml`
- Pipeline stages:
  - `bun install --frozen-lockfile`
  - `bun ultracite check`
  - `bun run typecheck`
  - `bun run test`
  - `bun run build`
- Local equivalent:
  - `bun ultracite check`
  - `bun run typecheck`
  - `bun run test`
  - `bun run build`

## Testing Notes

- Test runner: Bun (`bun test`).
- Bun preloads `src/tests/setup.ts` via `bunfig.toml`.
- Standard patterns are supported: `*.test.ts`, `*.spec.ts`, `*_test.ts`, `*_spec.ts`.
- There are currently no committed unit/integration test files beyond setup preload.

## Git Hooks & Commit Hygiene

- Husky `pre-commit` runs `bun run lint:staged`.
- Husky `commit-msg` runs Commitlint with `@commitlint/config-conventional`.

## When Oxlint + Oxfmt Can't Help

Focus manual review on:

1. Business logic correctness
2. Naming and architecture choices
3. Edge cases and error boundaries
4. Accessibility and UX details
5. Documentation clarity and intent

Run `bun run format` when code needs formatting/lint auto-fixes.
