# Kaloyan Donchev — Portfolio

Personal portfolio website for Kaloyan Donchev, a frontend developer with 3 years of experience building scalable web applications with Angular and React.

## About

A single-page portfolio showcasing skills, work experience, and projects. Built with Next.js and statically exported for fast, zero-server hosting.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Space Grotesk + JetBrains Mono (via `next/font/google`)
- **Icons:** lucide-react + custom SVG components

## Project Structure

```
src/
├── app/          # Next.js app entry (layout, globals.css)
├── components/   # Section components (Navbar, Hero, Projects, About, Contact, Footer)
└── lib/
    └── data.ts   # Single source of truth for all portfolio content
```

To update any content (bio, skills, experience, projects, contact), edit `src/lib/data.ts`.

## Getting Started

```bash
npm install
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build + type-check
npm run start    # Serve the production build
```
