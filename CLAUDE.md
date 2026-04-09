# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint (flat config, core-web-vitals + typescript)
```

No test framework is configured.

## Architecture

Next.js 16 App Router portfolio site. Two routes:
- `/` — [app/page.tsx](app/page.tsx): Hero section with bio, skills, and links
- `/projects` — [app/projects/page.tsx](app/projects/page.tsx): Hardcoded project showcase with external links

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Utility classes inline throughout; no component library or CSS modules. Dark mode via `dark:` variants. Theme tokens wired through CSS variables in [app/globals.css](app/globals.css).

**Components:** All React Server Components — no `"use client"` directives. No shared component layer; pages are self-contained.

**Fonts:** Geist and Geist Mono loaded via `next/font/google`, exposed as `--font-geist-sans` / `--font-geist-mono` CSS variables in [app/layout.tsx](app/layout.tsx).

**TypeScript:** Strict mode, path alias `@/*` maps to project root, module resolution `bundler`.
