# Pico

A platform allowing anyone to create small apps and share with friends. Apps are self-contained HTML+CSS+JS (no backend per app). Users can optionally create accounts to save their work.

## Tech Stack

- **Framework**: Astro (content-first, islands architecture)
- **UI**: React + Tailwind CSS
- **Backend**: Cloudflare Workers (NOT Pages - deprecated)
- **Database**: Cloudflare D1 (SQLite) + Drizzle ORM
- **Cache/Sessions**: Cloudflare KV
- **Runtime**: Bun, TypeScript

## Project Structure

```
/
├── src/
│   ├── components/     # React components (islands)
│   ├── layouts/        # Astro layouts
│   ├── pages/          # Routes
│   ├── lib/            # Utilities, db client
│   ├── schema.ts       # Drizzle schema
│   └── env.d.ts        # Runtime types
├── migrations/         # Drizzle migrations
├── wrangler.toml       # Cloudflare config
├── drizzle.config.ts   # Drizzle config
├── astro.config.mjs    # Astro config
└── package.json
```

## Development

**IMPORTANT:** Use `bun` and `bunx` for all package operations. NEVER use npm, pnpm, npx, or node.

### Commands

| Command | Action |
|--------|--------|
| `bun install` | Installs dependencies |
| `bun run dev` | Starts local dev server at `localhost:4321` |
| `bun run build` | Build your production site to `./dist/` |
| `bun run preview` | Preview your build locally |
| `bun run db:generate` | Generate Drizzle migrations |
| `bun run db:migrate:local` | Apply migrations to local D1 database |
| `bun run db:migrate:prod` | Apply migrations to production D1 database |
| `bun run db:migrate:preview` | Apply migrations to preview D1 database |
| `bun run db:studio:local` | Open Drizzle Studio for local database |
| `bun run db:types` | Generate Cloudflare types |
| `bunx wrangler@latest deploy` | Deploy to Cloudflare Workers |

### Initial Setup

1. Create Cloudflare D1 databases:
   ```bash
   bunx wrangler@latest d1 create pico-db
   bunx wrangler@latest d1 create pico-preview-db
   ```

2. Update `wrangler.toml` with the database IDs from the previous step.

3. Generate and run migrations:
   ```bash
   bun run db:generate
   bun run db:migrate:local
   ```

4. Start the dev server:
   ```bash
   bun run dev
   ```

### Deployment

Deploy to Cloudflare Workers:
```bash
bunx wrangler@latest deploy
```

## Future: AI-Generated Apps

The vision for Pico includes AI-generated apps. Users would be able to describe an app idea, and AI would generate the HTML, CSS, and JavaScript code automatically. This feature is documented but not yet implemented.

## Sources

- [Astro Cloudflare Adapter Docs](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Cloudflare Workers Framework Guide - Astro](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Going Full-Stack on Astro with Cloudflare D1 and Drizzle](https://kevinkipp.com/blog/going-full-stack-on-astro-with-cloudflare-d1-and-drizzle/)
- [Complete Guide to Deploying Astro on Cloudflare](https://eastondev.com/blog/en/posts/dev/20251203-astro-cloudflare-deploy/)
