# Portfolio Review Checklist

Check each item against the Figma design (or against what you expect). Mark `[x]` for good, or leave `[ ]` and add a note below it describing what's wrong — I'll pick those up.

**Figma:** https://www.figma.com/design/9xWUxkv7gWWBv6NItjeIDn/Untitled?node-id=235-421
**Local dev:** `npm run dev` → http://localhost:5173/

---

## Hero section (`src/components/Hero.jsx`)

- [ ] "UX Researcher & Designer" text style (size, weight, color)
- [ ] "Chanyanud" underline (SVG, position, thickness)
- [ ] "products" underline (SVG, position, rotation)
- [ ] Grouping/spacing of "Understanding people before designing products." + "This is how I Think!"
- [ ] Rotation angle of "This is how I Think!" annotation + arrow
- [ ] Hero tag pill positions (UX Research, Human-Centered Design, Usability Testing, Digital Product, Insight Synthesis)

## Selected Works section (`src/components/Work.jsx`)

- [ ] "Selected Works" card border/shadow style
- [ ] Category filter tabs (All, UX Research, Product Design, Academic Research) — counts and styling
- [ ] Card layout: category label, title, subtitle, description, arrow button
- [ ] Card content accuracy per project:
  - [ ] Retail Banking UX Research (title/subtitle/description)
  - [ ] SIIT Super App — "All-in-One Campus App"
  - [ ] Friends & Funds — "Group Planning & Expense App"
  - [ ] ActTrack — "Fitness Tracking & Goal App"
  - [ ] ManagIng — "Inventory Management"

## Project detail pages (`src/components/ProjectDetail.jsx`, `/work/:slug`)

- [ ] Hero illustration renders correctly (not cropped/stretched) for each project
- [ ] Title / category / subtitle match Figma
- [ ] Role / Course / Platform / Tools 2×2 grid — correct values, correct layout
- [ ] Long description text
- [ ] Key Features cards — title, description, and screenshot per feature:
  - [ ] SIIT Super App (Academic Planning, Course Enrollment, Library Booking, Learning Resources)
  - [ ] Friends & Funds (Group Scheduling, Item-Based Splitting)
  - [ ] ActTrack (Activity Tracking, Goal Setting, Activity Insights, Social Motivation)
  - [ ] ManagIng (Custom Inventory Setup, Inventory Management, Team Collaboration, Support & Communication)
- [ ] "← Back" link returns to home correctly
- [ ] **Not yet built:** "Design System" section (Color/Typography/UI Elements/Icons swatches) — skipped so far, flag if you want it added

## Experience section (`src/components/Experience.jsx`)

- [ ] Wavy timeline line + dashed segment position/style
- [ ] Dot positions on timeline (16.67% / 50% / 83.33%)
- [ ] Year labels above each timeline item
- [ ] "Experience" heading icon (rotation, size)
- [ ] Each experience card's icon, tag, role, company

## About section (`src/components/About.jsx`)

- [ ] "About Me" heading icon rotation
- [ ] "Graduated May 2026" icon (should be SVG, not emoji)
- [ ] "What I'm Into" — no text overflow at any window width (was fixed with container queries — resize through ~640–900px to confirm)

## Footer / Contact (`src/components/Contact.jsx`)

- [ ] Doodle line placements (squiggle top-right, arrow next to social buttons)
- [ ] "Let's create meaningful experiences together!" bubble position/sizing
- [ ] Social buttons (LinkedIn, GitHub, Email) hover states

## General

- [ ] Nav links (Work/Experience/About/Contact) scroll to the right section from the homepage, and navigate home correctly from a `/work/:slug` page
- [ ] No visual regressions on mobile widths (< 640px)
- [ ] Page load performance feels acceptable (images were optimized to WebP, ~1MB total)

---

## Known gaps (not yet addressed)

- Retail Banking UX Research project has no detail page (confidential — intentionally left as a card-only entry with `link: '#'`)
- No "Academic Research" category project yet (category tab shows 0)
- "Design System" section on project detail pages not built
