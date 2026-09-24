import { isArtKey, type ArtKey } from './specimens'

/** One step of a creation's process. Schema: CREATIONS.md §5. */
export type Step = {
  n: number
  date: string
  title: string
  kind: 'prompt' | 'fix' | 'pivot' | 'polish' | 'dead-end' | 'under-the-hood' | 'final'
  prompt: string | null
  note: string
  screenshot?: string | null
  mobile?: string | null
  snapshot?: string | null
  focus?: string | null
  convo?: string[]
  tag?: string
}

/** creations/<slug>/process.json. Schema: CREATIONS.md §5. */
export type Process = {
  slug: string
  title: string
  kind: string
  summary: string
  blurb: string
  cover: string | null
  art?: string | null
  started: string
  published: string | null
  embed: string
  live: string | null
  tools?: string[]
  steps: Step[]
}

export type Creation = Process & {
  art: ArtKey
  /** Tile image: the cover screenshot, used when process.json doesn't name a specimen `art`. */
  image: string | null
  isNew: boolean
  isDraft: boolean
  url: string
  /** Newest relevant date: published, else the last step, else started. */
  date: string
}

const NEW_FOR_DAYS = 30
const FALLBACK_ART: ArtKey = 'prism'

const manifests = import.meta.glob<Process>('/creations/*/process.json', { eager: true, import: 'default' })
// Only the PR comment links from each conversation log (see the creations plugin in vite.config.ts).
const convoLinks = import.meta.glob<Record<string, string>>('/creations/*/conversation.jsonl', {
  eager: true,
  query: '?links',
  import: 'default',
})

/** URL of a file inside creations/<slug>/ (served by the creations plugin in vite.config.ts). */
export function fileUrl(slug: string, file: string) {
  return `/creations/${slug}/files/${file.replace(/^\.?\//, '')}`
}

function toCreation(slug: string, p: Process): Creation {
  const date = p.published ?? p.steps[p.steps.length - 1]?.date ?? p.started
  const ageDays = p.published ? (Date.now() - Date.parse(p.published)) / 86_400_000 : Infinity
  return {
    ...p,
    slug,
    art: isArtKey(p.art) ? p.art : FALLBACK_ART,
    image: !isArtKey(p.art) && p.cover ? fileUrl(slug, p.cover) : null,
    isNew: ageDays <= NEW_FOR_DAYS,
    isDraft: !p.published,
    url: `/creations/${slug}/`,
    date,
  }
}

/** Published creations, newest first. In dev, drafts are included so work in progress can be previewed. */
export const creations: Creation[] = Object.entries(manifests)
  // The folder name is the slug: it's what the build uses for URLs.
  .map(([file, p]) => toCreation(file.split('/')[2], p))
  .filter((c) => import.meta.env.DEV || !c.isDraft)
  .sort((a, b) => b.date.localeCompare(a.date))

/** The creations sections and nav link stay hidden until there's at least one creation to show. */
export const hasCreations = creations.length > 0

export const kinds = [...new Set(creations.map((c) => c.kind))].sort()

export function getCreation(slug: string) {
  return creations.find((c) => c.slug === slug)
}

/** Link to the PR comment for the first logged message behind a step, if it has been posted. */
export function convoLink(slug: string, step: Step) {
  const links = convoLinks[`/creations/${slug}/conversation.jsonl`] ?? {}
  return step.convo?.map((id) => links[id]).find(Boolean) ?? null
}
