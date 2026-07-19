# Tejas Naik — Portfolio (Redesign)

A premium, award-style developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Highlights
- Aurora / mesh-gradient animated background with mouse-responsive glow
- Floating glass pill navbar that shrinks + blurs on scroll
- Split-layout hero with animated profile card and availability badge
- Bento-style project grid with category filtering and tilt-on-hover
- Vertical timelines for Research and Experience with glowing nodes
- Skills panel with animated progress bars
- Animated stat counters
- Contact section with glass info card + working form UI
- Glass splash/loading screen, custom 404 page, custom scrollbar
- SEO metadata, OpenGraph/Twitter cards, `robots.ts`, `sitemap.ts`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything — your name, roles, bio, socials, projects, research papers,
experience timeline, skills, and stats — lives in **`lib/data.ts`**.
Update that file and every section re-renders automatically.

To swap your photo, replace `public/images/tejas.jpg` (keep the same
filename, or update `profile.avatar` in `lib/data.ts`).

To wire up the contact form to a real backend (e.g. Formspree, Resend,
an API route), edit `handleSubmit` in `components/Contact.tsx`.

## Build

```bash
npm run build
npm run start
```
