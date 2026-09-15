# Portfolio

Chanyanud Sriyota's portfolio site — Vite + React + Tailwind CSS, deployed to GitHub Pages.

Live: https://oumchanyanud.github.io/portfolio/

## Develop

```
npm install
npm run dev
```

## Tech

- **Vite + React 19 + React Router** — SPA, `base: '/portfolio/'` (project page). `public/404.html` restores deep links on refresh.
- **Tailwind CSS v4** — design tokens in `src/index.css` (`@theme`).
- **motion** (Framer Motion) — playful scroll reveals / hover motion, gated by `prefers-reduced-motion`.
- **i18next / react-i18next** — English + Thai. Strings live in `src/i18n/locales/`. Thai is a work in progress.
- Fonts: **Inter** (body/logo) + **Playpen Sans Thai** (playful display, also covers Thai).

## Content

Editable content lives in `src/data/`, not scattered across components:

- `src/data/profile.js` — name, bio, photo, résumé path, LinkedIn/GitHub/email links
- `src/data/projects.js` — project cards, detail pages, key features, per-project design system
- `src/data/experience.js` — roles and dates

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time: **Settings → Pages → Source → "GitHub Actions"**.
