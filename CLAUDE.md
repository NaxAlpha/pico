# Pico - Project Conventions

## Package Manager
- Use `bun` and `bunx` for ALL package operations
- NEVER use npm, pnpm, npx, or node
- Cloudflare CLI: `bunx wrangler@latest <args>`

## Tech Stack
- **Framework**: Astro (content-first, islands architecture)
- **UI**: React + Tailwind CSS
- **Backend**: Cloudflare Workers (NOT Pages - deprecated)
- **Database**: Cloudflare D1 (SQLite) + Drizzle ORM
- **Cache/Sessions**: Cloudflare KV
- **Runtime**: Bun, TypeScript

## Important Notes
- Apps are self-contained HTML+CSS+JS (no backend per app)
- Future: AI-generated apps (documented but not implemented yet)
- Optional auth: anonymous works, accounts save your work
