# Ultracite + Next Start Repository Guide

This repository uses **Ultracite** with Next.js 16 + React 19.

## Scope

- App Router structure under `src/app`.
- Route-specific components are under `{route}/_components/page/` (for example, `about/_components/page/about-content.tsx`).
- Shared constants, metadata, and route references are centralized in `src/constants/metadata.ts`.
- SEO and structured data are implemented in `src/json-ld/` and `src/app/` metadata files.

## Quick Reference

- **Develop**: `bun dev`
- **Build**: `bun build`
- **Start**: `bun start`
- **Typecheck**: `bun run typecheck` (runs `bun run typegen` via `pretypecheck`)
- **Generate typed routes**: `bun run typegen`
- **Format code**: `bun ultracite fix`
- **Check for issues**: `bun ultracite check`
- **Check for issues (package script)**: `bun run lint`
- **Run staged checks**: `bun run lint:staged`
- **Prepare**: `bun run prepare`
- **Diagnose setup**: `bun ultracite doctor`

Oxlint + Oxfmt provides most formatting and linting fixes automatically.

## Core Principles

Write code that is accessible, performant, type-safe, and maintainable.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they improve clarity.
- Prefer `unknown` over `any` when a type is genuinely unknown.
- Use `const` assertions (`as const`) for immutable values and literal types.
- Use TypeScript narrowing rather than unnecessary assertions.
- Use meaningful variable names and avoid magic values.

### Modern JavaScript/TypeScript

- Use arrow functions for short callbacks.
- Use optional chaining (`?.`) and nullish coalescing (`??`) where useful.
- Prefer template literals over string concatenation.
- Use destructuring for object and array assignments.
- Use `const` by default; use `let` only when reassignment is needed.

### Async & Promises

- Use `async`/`await` for asynchronous flow.
- Await promises intentionally; handle errors with clear `try`/`catch` logic.
- Avoid async promise executor functions.

### React & JSX

- Prefer function components and server components for async data fetching where possible.
- Call hooks at top level only, never conditionally.
- Always provide stable `key` props for lists.
- Use semantic HTML and ARIA attributes correctly.
- Keep components focused and composed, not nested/monolithic.

### Error Handling

- Remove `console.log`, `debugger`, and debug-only logs from production code.
- Throw `Error` objects, not strings.
- Use early returns to keep control flow simple.

### Code Organization

- Keep related logic close together.
- Use plain, direct conditions where possible.
- Prefer small, testable units and clear boundaries.

### Security

- Add `rel="noopener"` when using `target="_blank"`.
- Avoid `dangerouslySetInnerHTML` unless absolutely required.
- Validate and sanitize all external input paths.

### Performance

- Prefer specific imports.
- Avoid unnecessary barrel re-export patterns.
- Prefer `next/image` and `Image` component for production image usage.
- Keep layout and class computation lightweight.

## Project Conventions (Derived from this codebase)

- Route constants are source-of-truth in `src/constants/metadata.ts`:
  - `ROUTE_PATHS` uses `Record<RouteName, Route>` and should be used for internal links.
  - `Page` metadata objects (`PAGE_TITLES`, `PAGE_DESCRIPTIONS`) should be updated from there.
- Use `ROUTE_PATHS` in UI and server files instead of hardcoded route strings.
- Use `getSiteUrl()` from `src/config/env.ts` for canonical URL construction (Vercel vars or localhost).
- Use font variables from `src/config/fonts.ts` (Geist Sans + Geist Mono) via `bodyFontClass`.
- Keep JSON-LD helpers in `src/json-ld/schema.ts` and script output in `src/components/json-ld.tsx`.

## CI and Quality Gates

- CI workflow: `.github/workflows/ci.yml`.
- Workflow stages:
  - `bun install --frozen-lockfile`
  - `bun ultracite check`
  - `bun run typecheck`
  - `bun run build`
- Local equivalent:
  - `bun ultracite check`
  - `bun run typecheck`
  - `bun run build`

## Framework-Specific Guidance

### Next.js

- Use Server Components for data-heavy or async data fetching flows.
- Use App Router metadata exports instead of legacy head injection.
- Enable and respect typed routing (`typedRoutes: true` in `next.config.ts`).
- Prefer app-level helpers in `src/app/` over API routes for this starter (no `api`/`middleware` directories are present).

### App Router structure (mandatory for this project)

- Root layout components: `src/app/_components/layout/`.
- Homepage components: `src/app/_components/page/`.
- Route-specific components: `{route}/_components/page/`.

### Testing Notes

- No test framework is configured in this starter yet.
- For new test work, keep test cases in standard `it()`/`test()` blocks with `async`/`await`.

## When Oxlint + Oxfmt Can't Help

Oxlint + Oxfmt catches formatting and common lint issues. Focus manual review on:

1. Business logic correctness
2. Naming and architecture decisions
3. Edge cases and error boundaries
4. Accessibility and UX details
5. Documentation and clear intent

Run `bun ultracite fix` when formatting changes are needed before committing.
