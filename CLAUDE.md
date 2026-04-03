# CLAUDE.md — Mihaita Braes Personal Portfolio

## Project Overview
Personal portfolio, CV, and blog for Mihaita Braes — Product Manager and aspiring
full-stack developer. The site is bold, colorful, expressive and futuristic in aesthetic.
It is a living product, maintained and expanded over time.

## Stack
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS + CSS custom properties for theming
- Language: TypeScript throughout — no plain JS files
- Animations: Framer Motion for page transitions and micro-interactions
- CMS/Blog: MDX files for blog posts (no external CMS needed initially)
- Contact form: Resend API for email sending
- Deployment: Vercel
- Version control: Git + GitHub

## Design System & Aesthetic
- Vibe: Bold, colorful, creative, expressive — NOT minimal or corporate
- Color palette: Rich, high-contrast with vibrant accent colors
- Typography: Expressive display fonts for headings, clean sans-serif for body
- Animations: Meaningful motion — page transitions, scroll reveals, hover states
- Dark mode first, with light mode toggle
- Glassmorphism and gradient effects used intentionally, not excessively
- Mobile-first responsive design

## Site Structure
- / — Hero landing with bold intro, animated headline, CTA
- /about — Personal story, values, personality — not just a CV
- /cv — Interactive CV with timeline, skills visualization, downloadable PDF
- /projects — Case studies of PM work and side projects (IașiPark, Lab.club, etc.)
- /blog — MDX-powered blog for thoughts on product, tech, life
- /contact — Contact form + social links
- Future: /uses (tools I use), /now (what I'm working on)

## Folder Structure
- /app — Next.js App Router pages and layouts
- /app/blog/[slug] — Dynamic blog post pages
- /components — Reusable UI components
- /components/ui — Atomic design system components (Button, Card, Badge, etc.)
- /components/sections — Page section components (Hero, About, Projects, etc.)
- /content/blog — MDX blog post files
- /content/projects — MDX project case study files
- /lib — Utility functions, helpers, MDX parsing
- /hooks — Custom React hooks
- /types — TypeScript type definitions
- /public — Static assets, images, CV PDF

## Coding Conventions
- Functional components with hooks only — no class components
- Always type props with TypeScript interfaces, never use `any`
- Named exports for components, default exports for pages (Next.js convention)
- File naming: PascalCase for components (Hero.tsx), kebab-case for pages (about/page.tsx)
- Tailwind utility classes preferred — custom CSS only for complex animations
- CSS variables for design tokens (colors, spacing, fonts)
- Co-locate component styles, tests, and stories when applicable

## Animation Conventions
- Use Framer Motion for all animations
- Page transitions: subtle fade + slight upward movement
- Scroll reveals: stagger children with 0.1s delay
- Hover states: scale(1.02) + subtle shadow lift
- No animations that block content or feel gimmicky

## Component Patterns
- Always handle loading, error, and empty states
- Use Suspense boundaries for async components
- Images: always use next/image with proper width/height
- Links: use next/link for internal, target="_blank" rel="noopener" for external
- Forms: React Hook Form + Zod for validation

## Content Guidelines
- Writing tone: Personal, honest, direct — not corporate buzzword-heavy
- Project descriptions: Tell the story, not just list features
- Blog posts: Thoughtful, opinionated, written like a human not a manual

## Performance
- Target Lighthouse score: 95+ across all metrics
- Fonts: Use next/font for zero layout shift
- Images: WebP format, lazy loaded, properly sized
- No unnecessary dependencies — keep bundle lean

## Current Development Stage
- Learning Next.js and React in parallel via Scrimba
- Start simple, iterate toward full vision
- Prioritize getting something live early, then enhance
- Each Scrimba concept learned should be applied here immediately

## Collaboration Style
- Mihaita is a complete beginner — finished HTML/CSS, currently learning JavaScript and Tailwind, just starting Next.js via Scrimba
- We build and learn together — don't just write code silently, explain what's happening and why
- When introducing a new concept (hooks, components, routing, etc.), give a short plain-English explanation before or alongside the code
- Apply concepts from Scrimba to this project immediately as they're learned — learning by doing
- Keep explanations friendly, direct, and approachable — not condescending, not overly academic
- Encourage questions at every step — no such thing as a dumb question here
