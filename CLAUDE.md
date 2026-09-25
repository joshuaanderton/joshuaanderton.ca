# joshuaanderton.ca

Vite + React 19 + Tailwind v4, with shadcn-style components in `src/components/ui`. Package manager: yarn.

## Design

The site is built on **[polarize-ui](https://github.com/polarizetech/polarize-ui)** (`@polarizetech/polarize-ui`, a git dependency pinned to a tag in `package.json`), the same system as polarize.tech. Components come from `@polarizetech/polarize-ui/react`: the publication layout (`Shell`, `Brand`, `AuthorNote`, `SidebarSection`, `SidebarMeta`, `PostList`, `Article`, `Footer`), typography (`Display`, `Eyebrow`, `Standfirst`) and the shadcn components (`Button`, `Input`, `Select`, `Tabs`, `Slider`, …). `src/app.css` only wires it in: Tailwind, `tw-animate-css`, `@polarizetech/polarize-ui/theme.css`, and an `@source` line so Tailwind sees the package's classes. **Do not restyle or copy components here**; anything another site could use goes to polarize-ui and comes back as a new tag (`yarn add github:polarizetech/polarize-ui#vX.Y.Z`).

Rules that come with the system: Instrument Serif for headings, never uppercased; Inter for running text, never bold, never tracked; uppercase is always IBM Plex Mono (`.ui-label`); every colour is a token. Fonts are self-hosted by the package (no font CDN). Light and dark follow the reader's system setting (a `.dark` class set by the script in `index.html`). The X, GitHub and LinkedIn glyphs are `src/components/social-icon.tsx` (lucide has no brand icons).

The site is one page for now: a profile with the portrait, one line (`site.intro`) and the social links. Every path renders it. The creations system (process posts built from git history, `CREATIONS.md`, the Font Composer draft) was removed on 2026-09-25 and is in git history before that commit.

The previous Specimen design system (redesigned away 2026-09-25) is in git history: `git show 8b12670:design/specimen-design-system.md`. Its specimen icons now live in polarize-ui (from v0.5.0): `<Specimen name="bee" />`, with the prompt for drawing more in its `SPECIMEN-ICONS.md`. New icons go there, not here.

**Changing a component?** Do it upstream in polarize-ui. Every push to its `main` is a public release, and outside users are promised that a patch never breaks. **Read the first section of its `CLAUDE.md` (or `AGENTS.md`) before committing there:** mark breaking changes with `!:` or `BREAKING CHANGE:`, and prefer a deprecated alias to a removal. This repo picks up new releases by itself once a day (`.github/workflows/polarize-ui.yml`). If that run fails, a release broke something here and this repo needs a migration commit.
