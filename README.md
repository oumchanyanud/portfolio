# Portfolio

Chanyanud Sriyota's portfolio site — Vite + React + Tailwind CSS, deployed to GitHub Pages.

## Develop

```
npm install
npm run dev
```

## Content still needed (TODOs)

All editable content lives in `src/data/`, not scattered across components:

- `src/data/profile.js` — profile photo, resume PDF path, LinkedIn/GitHub/email links
- `src/data/projects.js` — real project titles, descriptions, links, and images for the Selected Works section
- `src/data/experience.js` — already filled in from the design, update as needed

Search the codebase for `TODO` to find every remaining placeholder.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages automatically. In the repo settings, set **Settings → Pages → Source** to "GitHub Actions" once this is pushed.
