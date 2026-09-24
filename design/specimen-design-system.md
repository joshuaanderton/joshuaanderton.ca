# Specimen Design System

The component library and design rules for joshuaanderton.ca. It's built on **shadcn/ui** (React + Tailwind v4 + Radix), re-themed to the specimen-catalogue look. Hand this file and `globals.css` to any future session and ask it to follow them.

**Companion files**
- `globals.css`: the theme tokens, ready for a shadcn project.
- `specimen-icons-prompt.md`: rules for drawing new specimen icons.

---

## 1. The idea in one paragraph

The site is a **specimen catalogue for things Joshua makes**. It is monochrome, calm and precise, like a well-designed lab supply catalogue: white sheets on a grey backdrop, hairline structure, a clean grotesk, and hand-drawn line illustrations that carry all of the personality. The illustrations are the colour. Everything else stays quiet so they can be loud.

## 2. Non-negotiables

1. **Monochrome.** Greys only. `--destructive` is the single exception, and only for errors. There are no brand accent colours, gradients or tints.
2. **Illustrations carry the personality.** Every creation, category and empty state gets a specimen icon. Never use photos, emoji or third-party icon sets as the main visual. Lucide (the icon set that comes with shadcn) is allowed only for small **UI glyphs**: search, chevrons, close, external-link, sun/moon.
3. **One oversized corner per surface.** A major surface (sheet, card, panel, header) gets exactly one rounded corner. The other three stay square or nearly square. This is the signature shape. See §5.
4. **Structure is hairlines, not boxes.** Group things with 1px `--border` lines, grid gaps and surface changes (white on panel grey on outer grey). Don't use drop shadows, and don't put a card inside a card.
5. **One type family.** Inter Tight throughout. Weight and size create the hierarchy.
6. **Sentence case.** Everywhere: nav, buttons, headings, labels. No all-caps labels and no tracked-out eyebrows.
7. **Both themes, always.** Every component is checked in light and dark mode. Never write a colour that isn't a token.

## 3. Tokens

All of these are defined in `globals.css`. The shadcn names are kept so stock components theme themselves automatically.

### Colour

| Token | Light | Dark | Role |
|---|---|---|---|
| `outer` | #C4C4C4 | #0E0E0E | Backdrop behind sheets and cards |
| `background` / `card` / `tile` | #FFFFFF | #222222 | Sheets, cards, tiles |
| `panel` = `secondary` = `muted` = `accent` | #F4F4F4 | #1A1A1A | Browse panel, split-sheet side, hover surface |
| `foreground` = `primary` | #1B1B1B | #EDEDED | Ink: text, primary fills, header rule |
| `muted-foreground` | #6B6B6B | #9A9A9A | Secondary text, meta, counts |
| `border` | #E4E4E4 | #303030 | Hairlines between items |
| `input` = `fill` | #D8D8D8 | #474747 | Control borders; illustration grey |
| `stroke` | #3A3A3A | #CFCFCF | Illustration outlines |
| `tab` / `tab-foreground` | #1B1B1B / #FFF | #EDEDED / #1A1A1A | Label tabs |
| `ring` | ink | ink | Focus outline |

**Surface stack**, from back to front: `outer` → `background` sheet → `panel` inset areas → `background` tiles and cards. A surface only ever sits on the one directly behind it.

### Type (Inter Tight 400 / 500 / 600)

| Role | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Display (page h1) | clamp(2.5rem, 5.5vw, 3.75rem) | 600 | −0.04em | 1 |
| Section title | clamp(2.25rem, 4.5vw, 3.25rem) | 600 | −0.04em | 1 |
| Card title | 1.5rem | 600 | −0.03em | 1.1 |
| Brand wordmark | 1.5rem | 400 | −0.035em | 1 |
| Lede | clamp(1.125rem, 1.6vw, 1.3125rem) | 400 | 0 | 1.45 |
| Body | 1.0625rem | 400 | 0 | 1.5 |
| Item name | 1.0625rem | 500 | −0.01em | 1.3 |
| UI / control | 0.95rem | 500–600 | 0 | 1.2 |
| Meta / caption | 0.8125–0.875rem | 400–500 | 0 | 1.3 |

Rules:
- Headlines are always tight and heavy (600, negative tracking). Body text is never tracked.
- Keep line length to 30rem (≈ 65 characters) or less for body copy.
- Numbers in counts and dates use `tabular-nums`.
- The wordmark is lowercase and set in one run with no spaces: `joshuaanderton`.

### Radius

| Token | Value | Used on |
|---|---|---|
| `rounded-md` (`--radius`) | 3px | Inputs, selects, buttons, badges, chips |
| `rounded-hover` | 1rem | The tile hover-box, bottom-left corner only |
| `rounded-soft` | 1.25rem | Header bottom-right corner, browse panel bottom-left corner |
| `rounded-feature` | 3rem | Cards (top-left), sheet (bottom-right), the last tile of a grid (bottom-right) |
| Tab corner | 0.55rem | Label tab, top-right corner only |

### Spacing and layout

- **Page gutter:** `clamp(1.25rem, 8vw, 7rem)` inside the sheet, and `clamp(1rem, 4vw, 3rem)` on the outer backdrop.
- **Section rhythm:** vertical padding of `clamp(2rem, 4vw, 3rem)` for tight sections and `clamp(3rem, 7vw, 5.5rem)` for major ones.
- **Sheet max width:** 90rem.
- **Tile grid:** `repeat(auto-fill, minmax(min(100%, 14.5rem), 1fr))` with a 0.5rem gap. On phones (≤ 520px) it becomes 2 columns.
- **Card grid:** `repeat(auto-fit, minmax(min(100%, 23rem), 1fr))` with a 1.5rem gap.
- **Split sheet:** 5fr / 7fr columns, which stack at ≤ 820px.
- Content is **left-aligned**. The only centred text is item names under specimen tiles.

### Motion

- Only motion that answers a user action: hover outlines, disclosure open and close. It lasts 120–200ms and eases out.
- No entrance animations, no scroll reveals, and no autoplay motion anywhere.
- Honour `prefers-reduced-motion` globally (already in `globals.css`).

## 4. Setup

```bash
npx shadcn@latest init        # base colour: Neutral, CSS variables: yes
# replace app/globals.css with the provided globals.css
npx shadcn@latest add button input select badge card tabs tooltip dialog dropdown-menu separator
```

Load the font in `app/layout.tsx`:

```tsx
import { Inter_Tight } from "next/font/google";
const inter = Inter_Tight({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-sans" });
```

**Dark mode:** use `next-themes` with `attribute="class"` and `defaultTheme="system"`. The `.dark` class switches every token.

## 5. The signature shape

Every major surface has **one** large rounded corner, chosen by where the surface sits:

| Surface | Rounded corner | Size |
|---|---|---|
| Sheet (page container) | bottom-right | feature (3rem) |
| Site header | bottom-right | soft (1.25rem) |
| Browse panel | bottom-left | soft (1.25rem) |
| Card | top-left | feature (3rem) |
| Last tile in a split-sheet grid | bottom-right | feature (3rem) |
| Tile hover-box | bottom-left | hover (1rem) |
| Label tab | top-right | 0.55rem |

Tailwind: `rounded-none rounded-tl-feature`, `rounded-br-feature`, and so on. Never round all four corners of a surface. Small controls (3px) are the one exception.

## 6. Components

For each component, "Base" is the shadcn component to start from, and "Change" lists what differs from stock shadcn.

### 6.1 Button — Base: `button`

| Variant | Look | Use |
|---|---|---|
| `default` | Ink fill, white text, 3px radius | The one primary action in a view |
| `outline` | 1px `input` border, `background` fill, `shadow-lip` | Secondary actions; the same style as filter controls |
| `ghost` | No border; `accent` background on hover | Toolbar actions, the theme toggle |
| `link` | 600 weight, underline with 0.2em offset | Clear all, inline actions |

Change: add `shadow-lip` to `outline`, use `h-10 px-4 text-[0.95rem] font-semibold` for the default size, and keep `rounded-md` (3px). Remove `secondary` or alias it to `outline`. Remove `destructive` from marketing pages.

```tsx
// components/ui/button.tsx (variant block only)
variant: {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background shadow-lip hover:bg-accent",
  ghost:   "hover:bg-accent",
  link:    "underline underline-offset-[0.2em] font-semibold px-0 h-auto",
},
```

Copy: a verb plus an object. Use "Open project", not "Learn more". There are no arrows (→) in button text.

### 6.2 Input — Base: `input`

A 1px `input` border, `background` fill, `shadow-lip`, 3px radius, `h-11`, and placeholder in `muted-foreground`. A search input gets a Lucide `Search` glyph at 16px, positioned at the left 14px with 38px of left padding. Placeholder copy is plain: "Search for a creation…".

### 6.3 Select / Filter dropdown — Base: `select`

The trigger is styled exactly like an `outline` button: text weight 600, with a `ChevronDown` glyph and an optional 16px leading glyph. Content uses `popover`, a 1px `border`, a 3px radius, and **no shadow**; `border-foreground` stands in for elevation. Items get an `accent` background on highlight and a check glyph on the right when selected.

### 6.4 FilterBar (custom)

Layout: a search input (flex 1, max 28rem), then one or more filter Selects, then a `link` button reading "Clear all", pushed to the far right on desktop.

```tsx
<div className="flex flex-wrap items-center gap-2">
  <SearchInput className="flex-1 basis-80 max-w-md" />
  <FilterSelect label="Type" options={kinds} />
  <Button variant="link" className="ml-auto">Clear all</Button>
</div>
```

### 6.5 ResultStatus (custom)

This is a single row between the FilterBar and the grid. The count is on the left in `foreground` ("3 creations found."). An optional note sits on the right in `muted-foreground` ("Updated as they ship."). Count text is always a full sentence with a period, and uses the singular when there is one result.

### 6.6 BrowsePanel (custom)

A `panel` surface with a bottom-left `rounded-soft` corner. It contains the display h1 and a FilterBar. Padding: top `clamp(2.5rem,6vw,4rem)`, sides equal to the page gutter.

### 6.7 SpecimenTile (custom), the core component

This is the catalogue item used in the creations grid.

Anatomy:
1. **Art:** a square specimen icon, max 11rem, centred. It can be replaced by a screenshot `img` with `object-cover` and a 4px radius.
2. **Name:** 500 weight, centred, followed by an optional **New** badge.
3. **Meta:** one line in `muted-foreground`, 0.875rem.

States:
- Rest: no border.
- Hover or focus-visible: a 1px `foreground` border, `panel` background, and a `rounded-bl-hover` corner. This outline box is the only hover effect. Don't scale, lift or add a shadow.
- The entire tile is a single link.

```tsx
<a href={url} className="block text-center p-4 pb-5 border border-transparent rounded-bl-hover
  hover:border-foreground hover:bg-panel focus-visible:border-foreground focus-visible:bg-panel focus-visible:outline-none">
  <div className="aspect-square max-w-44 mx-auto"><Specimen name={art} /></div>
  <h3 className="mt-3.5 text-[1.0625rem] font-medium tracking-[-0.01em]">{title}{isNew && <NewBadge />}</h3>
  <p className="text-sm text-muted-foreground">{blurb}</p>
</a>
```

### 6.8 LabelTab (custom)

A dark tab pinned to the bottom-left of a framed tile: `bg-tab text-tab-foreground text-sm font-medium px-3 py-1.5 rounded-tr-[0.55rem]`. Use it in framed grids (split sheet, gallery) where tiles touch. Don't use it in the open creations grid.

### 6.9 FramedGrid (custom)

Tiles that touch and share 1px `border` hairlines. Build it with borders on the cells (right and bottom, plus left on the container), not a coloured `gap`, because gap colours show up as bands when rows don't fill. It's 3 columns (2 on phones), with square tiles, and the art is inset 8% at the top and sides and 16% at the bottom to leave room for the tab. The last tile takes a `rounded-br-feature` corner when it's the corner of its surface.

### 6.10 SplitSheet (custom)

A two-column section. On the left is a `panel` side with its content bottom-aligned: Chip, section title, lede and links. On the right is a FramedGrid. It's used for About and for any category landing page ("Cell Structures" in the reference). It stacks at 820px, and the side panel then loses its bottom alignment.

### 6.11 Card — Base: `card`

Change: remove the shadow and the full border. Use `rounded-none rounded-tl-feature`, with padding `p-6`, on an `outer` backdrop.

Anatomy:
- **CardHeader:** a single row with the brand mark (20px) and CardTitle (1.5rem/600) on the left, and optional meta on the right in `muted-foreground`. There's a 1px `border` rule below, `pb-4 mb-3`.
- **CardContent:** usually a 3-column grid of mini tiles (art with a caption at 0.8125rem). Mini tiles can be links and use the same hover-box as SpecimenTile, with a 0.75rem bottom-left corner.
- There's no CardFooter by default. If a card needs an action, it's a single `link` button.

### 6.12 Badge — Base: `badge`

| Variant | Look | Use |
|---|---|---|
| `outline` (default) | 1px `foreground` border, 3px radius, 0.75rem, 600 weight, `px-1.5` | "New", status |
| `solid` | `tab` fill | Rare: a single highlighted state |

Drop shadcn's `secondary` and `destructive` badge variants from public pages.

### 6.13 Chip (custom)

A category marker placed above a section title: a 1px `foreground` border, 3px radius, 0.875rem, 500 weight, `px-2.5 py-0.5`. It is not interactive. For interactive filters, use Select, not chips.

### 6.14 SiteHeader (custom)

Three zones:
- **Left:** the brand, which is the mark plus the lowercase wordmark.
- **Centre:** the main nav, in 500 weight, underlined on hover.
- **Right:** external links in `muted-foreground`.

It has a `background` fill, a 1px `foreground` bottom rule, and a `rounded-br-soft` corner. It does not stick to the top of the page. On phones, the external links hide and the nav wraps below the brand.

### 6.15 Brand mark

A 2 × 2 grid of four different shapes: a rounded square, a circle, a quarter-circle and a pill. It is filled with `foreground`.

```svg
<svg viewBox="0 0 24 24"><rect x="1" y="1" width="10" height="10" rx="2.5"/><circle cx="18" cy="6" r="5"/><path d="M1 13h10v10A10 10 0 0 1 1 13z"/><rect x="13" y="13" width="10" height="10" rx="5"/></svg>
```

It's used in the header (26px), in card titles (20px), and as a favicon. Never recolour or outline it.

### 6.16 Specimen (icon renderer)

```tsx
import { ART } from "@/lib/specimens";   // { key: "<svg inner markup>" }
export function Specimen({ name, className }: { name: keyof typeof ART; className?: string }) {
  return <svg className={cn("sp", className)} viewBox="0 0 200 200" aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: ART[name] }} />;
}
```

Icons are decorative (`aria-hidden`). The visible label next to them carries the meaning. Rules for new icons are in `specimen-icons-prompt.md`.

### 6.17 EmptyState (custom)

A centred specimen icon (8rem), one sentence in `muted-foreground` saying what happened, and one action. Example: "No creations match that search." with the link button "Clear filters". Never apologise and never be vague.

### 6.18 ContactCard

A Card variant with a large mailto link (clamp(1.5rem, 4vw, 2.5rem), 500 weight, 1px underline) and one line of plain copy above it.

### 6.19 Other shadcn components (when needed)

Use them stock, with these overrides:
- **Tabs:** the active tab is ink-filled (like `default` Button) and the rest are ghost. There's no pill container; they sit on a hairline.
- **Dialog / Sheet:** a `background` surface, a 1px `foreground` border, `rounded-tl-feature`, no shadow, and an overlay of `outer` at 80%.
- **Tooltip:** `tab` colours, 3px radius, 0.8125rem.
- **Separator:** always the `border` hairline.
- **Dropdown menu:** same as the Select content.
- **Toast (sonner):** `tab` colours, top-right corner rounded 0.55rem. Copy reuses the action's name ("Copied", "Saved").

## 7. Content model

Creations live in one typed list, newest first. The filters and counts derive from it automatically.

```ts
type Creation = {
  title: string;          // "Broadsheet"
  kind: string;           // category; becomes a filter option. "Websites", "Podcast themes", "Tools", "Experiments"
  date: string;           // ISO, "2026-09-23"
  blurb: string;          // ≤ 40 characters, noun phrase: "Newspaper-style podcast site"
  url: string;
  art?: keyof typeof ART; // specimen icon key
  image?: string;         // screenshot; overrides art
  isNew?: boolean;        // shows the New badge; remove after ~30 days
};
```

Specimen sets (the Specimens cards) use the same idea: `{ title, label, items: [artKey, name, url?][] }`, with exactly 6 items per card so every card is a 3 × 2 grid.

## 8. Voice and copy

- Plain, specific and a little dry. Describe what a thing is, not how great it is.
- Name things by what visitors understand: "Podcast themes", not "Theme engine".
- Never say how the work was made (no mention of AI tools). Call things "creations", "work" or "projects".
- Headings are nouns: "Latest creations", "Specimens", "Contact".
- Buttons are verbs. Counts are full sentences. Empty states give direction.
- Avoid: exclamation marks, "Learn more", "Check out", "Awesome", emoji, and middle-dot meta strings (A · B · C).

## 9. Accessibility floor

- Text contrast is at least 4.5:1 (`muted-foreground` on `panel` passes in both themes). Don't go lighter than `muted-foreground` for any text.
- Every interactive element has a visible `:focus-visible` state: a 2px ink outline with a 3px offset, or the tile hover-box.
- Hit targets are at least 40px tall.
- Filters announce results: wrap the grid and count in `aria-live="polite"`.
- Icons are `aria-hidden`, and names are real text.
- Respect `prefers-reduced-motion` and `prefers-color-scheme`. Include `viewport-fit=cover` and the safe-area insets, which are already in `globals.css`.

## 10. Don'ts

- Don't add an accent colour, not even for links or "New".
- Don't use drop shadows, glows, blur or glassmorphism.
- Don't round all four corners of a surface.
- Don't put cards inside cards, or give tiles their own shadowed boxes.
- Don't use all-caps labels, tracked eyebrows or numbered section markers (01 / 02).
- Don't use stock photos or third-party illustration packs.
- Don't add entrance animations, scroll effects or hover lifts and scales.
- Don't use a second typeface, or a monospace face for meta.

## 11. Review checklist for new work

- [ ] Uses only tokens, and looks right in light **and** dark mode.
- [ ] Each major surface has exactly one oversized corner, placed per §5.
- [ ] Hierarchy comes from weight and size in Inter Tight only.
- [ ] Every new creation or category has a specimen icon.
- [ ] Hover states are the outline box. There's no motion beyond it.
- [ ] Copy is sentence case, specific, and doesn't mention how the work was made.
- [ ] Works at 390px wide, with 2-column tiles and stacked split sheets.
- [ ] Focus is visible on everything interactive.
