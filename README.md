# Moddulo — Landing Page

Next.js (App Router) project for the Moddulo studio landing page.

## Stack

- Next.js 14 + React 18 + TypeScript
- Plain CSS (CSS variables, no framework) in `app/globals.css`
- Fonts loaded via `next/font/google`: Space Grotesk, Inter, IBM Plex Mono

## Structure

```
app/
  layout.tsx      → fonts + metadata
  page.tsx         → composes all sections
  globals.css      → design tokens + all styles
components/
  Header.tsx       → sticky nav, scroll state
  Logo.tsx         → "|dd| Moddulo" mark
  Hero.tsx
  Services.tsx
  Approach.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx       → scroll fade-in wrapper (IntersectionObserver)
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Notes

- The contact form is currently client-side only (no backend). Wire the
  `handleSubmit` function in `components/Contact.tsx` to an API route,
  Formspree, or similar to actually send messages.
- Copy lives directly in each component — update text there.
