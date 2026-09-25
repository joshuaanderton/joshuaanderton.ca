# joshuaanderton.ca

Vite + React 19 + Tailwind v4, with shadcn-style components in `src/components/ui`. Package manager: yarn.

## Design

The site is built on **[polarize-ui](https://github.com/polarizetech/polarize-ui)** (`@polarizetech/polarize-ui`, a git dependency pinned to a tag in `package.json`), the same system as polarize.tech. Components come from `@polarizetech/polarize-ui/react`: the publication layout (`Shell`, `Brand`, `AuthorNote`, `SidebarSection`, `SidebarMeta`, `PostList`, `Article`, `Footer`), typography (`Display`, `Eyebrow`, `Standfirst`) and the shadcn components (`Button`, `Input`, `Select`, `Tabs`, `Slider`, …). `src/app.css` only wires it in: Tailwind, `tw-animate-css`, `@polarizetech/polarize-ui/theme.css`, and an `@source` line so Tailwind sees the package's classes. **Do not restyle or copy components here**; anything another site could use goes to polarize-ui and comes back as a new tag (`yarn add github:polarizetech/polarize-ui#vX.Y.Z`).

Rules that come with the system: Instrument Serif for headings, never uppercased; Inter for running text, never bold, never tracked; uppercase is always IBM Plex Mono (`.ui-label`); every colour is a token. Fonts are self-hosted by the package (no font CDN). Light and dark follow the reader's system setting (a `.dark` class set by the script in `index.html`). The X, GitHub and LinkedIn glyphs are `src/components/social-icon.tsx` (lucide has no brand icons).

The previous Specimen design system (redesigned away 2026-09-25) is in git history: `git show 8b12670:design/specimen-design-system.md`.

## Creations

When working in creations/, follow @CREATIONS.md exactly. Every visible change is a step: snapshot, screenshots, process.json entry, commit with trailers, tag.

The site reads every `creations/*/process.json` (`src/lib/creations.ts`). Published creations get a post at `/creations/<slug>/`, and their files are served from `/creations/<slug>/files/` (`vite.config.ts`). Drafts show in dev only. The creations sections and nav link stay hidden until at least one creation exists (`hasCreations`).
