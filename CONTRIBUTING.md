# Contributing

Thanks for helping improve this starter.

## Local setup

1. Install dependencies with `bun install`.
2. Copy `.env.example` to `.env.local` and set values.
3. Run `bun dev`.

## Code style

- Use existing patterns in `src/`.
- Keep server concerns in route handlers and server components where possible.
- Keep client components targeted and accessible.

## API and JSON-LD additions

- Add new API routes under `src/app/api`.
- Return API payloads using `src/lib/api/response.ts`.
- Validate incoming payloads with `src/lib/api/validation.ts`.
- Add page-specific metadata in each route `page.tsx`.

## Release checks

- `bun run typecheck`
- `bun ultracite check`
- `bun run build`
