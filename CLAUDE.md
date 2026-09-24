# joshuaanderton.ca

Vite + React 19 + Tailwind v4, with shadcn-style components in `src/components/ui`. Package manager: yarn.

## Design

Follow `design/specimen-design-system.md` for all site UI, and `design/specimen-icons-prompt.md` for new specimen icons (add them to `src/lib/specimens.ts`). Theme tokens are in `src/app.css`. The design doc's setup section assumes Next.js; this site is Vite, so fonts load from Google Fonts in `index.html` and dark mode is a `.dark` class on `<html>`. For now the site is dark-only: the class is hard-coded in `index.html`, and there's no theme switcher. Departures from the design doc: no rounded bottom-right corners (header, sheet and grid run straight across; the contact card keeps its top-left corner), and the header shows X, GitHub and LinkedIn icons (`src/components/social-icon.tsx`). The header nav and the About icon grid are built but hidden via `site.show` in `src/lib/site.ts`.

## Creations

When working in creations/, follow @CREATIONS.md exactly. Every visible change is a step: snapshot, screenshots, process.json entry, commit with trailers, tag.

The site reads every `creations/*/process.json` (`src/lib/creations.ts`). Published creations get a post at `/creations/<slug>/`, and their files are served from `/creations/<slug>/files/` (`vite.config.ts`). Drafts show in dev only. The creations sections and nav link stay hidden until at least one creation exists (`hasCreations`).
