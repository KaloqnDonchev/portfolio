# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also type-checks)
npm run start    # Serve the production build
```

There is no linter or test suite configured.

## Git Workflow

After completing any change to the codebase, always ask the user if they would like to create a new commit and push it to the GitHub repository. Before committing, write a clean and concise commit message that accurately describes the change.

## Architecture

Single-page Next.js 16 app (App Router, statically exported). All visible content is in one scrollable page — no routing beyond `/`.

**Content layer:** `src/lib/data.ts` is the single source of truth for all portfolio content (name, bio, skills, experience, projects, contact). Update content here; components read from it directly.

**Component layer:** `src/components/` — one file per section (Navbar, Hero, Projects, About, Contact, Footer). Every component that uses Framer Motion must be a Client Component (`"use client"`).

**Styling:** Tailwind CSS v4 (no `tailwind.config.ts` — configuration lives in `src/app/globals.css` via `@theme inline`). Design tokens (colors, fonts) are CSS custom properties on `:root`. Fonts (Space Grotesk + JetBrains Mono) are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-space-grotesk` / `--font-jetbrains-mono`, then mapped to `--font-sans` / `--font-mono` inside `@theme inline`.

**Animations:** Framer Motion `whileInView` + `viewport={{ once: true }}` pattern for scroll-triggered reveals. The `fadeUp` variant object (`hidden: { opacity: 0, y: 24 }`, `show: { opacity: 1, y: 0 }`) is the standard animation used across all sections — keep new animations consistent with this.

**Icons:** `lucide-react` is installed but the `Github` icon does not exist in this version. A local `GithubIcon` SVG component is defined inline in each file that needs it (Hero, Projects, Contact).
