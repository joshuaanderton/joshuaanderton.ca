import { useMemo, useRef, useState } from 'react'
import { SearchIcon } from 'lucide-react'
import {
  Button, Display, Input, PostList, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Standfirst,
} from '@polarizetech/polarize-ui/react'

import { creations, hasCreations, kinds, type Creation } from '@/lib/creations'
import { site } from '@/lib/site'

const ALL = 'all'

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}

function badges(c: Creation) {
  return (
    <>
      <span className="ui-pill">{c.kind}</span>
      {c.isDraft ? <span className="ui-pill">Draft</span> : c.isNew ? <span className="ui-pill">New</span> : null}
    </>
  )
}

export function Home() {
  return (
    <>
      <section aria-labelledby="intro-title" className="ui-doc">
        <header className="ui-doc__head">
          <p className="ui-label">About</p>
          <Display level={2} className="mt-3 mb-4">
            <span id="intro-title">{site.intro}</span>
          </Display>
          <Standfirst>
            I build websites and small tools, and write up research on signals and the body at{' '}
            <a className="text-[var(--pub-accent)] underline-offset-4 hover:underline" href="https://polarize.tech">polarize.tech</a>.
          </Standfirst>
        </header>
      </section>

      {hasCreations && <Creations />}
      <Contact />
    </>
  )
}

function Creations() {
  const [term, setTerm] = useState('')
  const [kind, setKind] = useState(ALL)
  const searchRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    const q = term.trim().toLowerCase()
    return creations.filter(
      (c) =>
        (kind === ALL || c.kind === kind) &&
        (!q || `${c.title} ${c.blurb} ${c.kind} ${c.summary}`.toLowerCase().includes(q)),
    )
  }, [term, kind])

  function clearAll() {
    setTerm('')
    setKind(ALL)
    searchRef.current?.focus()
  }

  return (
    <section id="creations" aria-labelledby="creations-title" className="mb-[var(--space-8)]">
      <h2 id="creations-title" className="ui-label ui-main__heading">Creations</h2>

      <div className="mb-[var(--space-4)] flex flex-wrap items-center gap-2">
        <label className="relative max-w-md flex-1 basis-72">
          <span className="sr-only">Search creations</span>
          <SearchIcon aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            ref={searchRef}
            type="search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Search creations…"
            autoComplete="off"
            className="pl-9"
          />
        </label>
        <Select value={kind} onValueChange={setKind}>
          <SelectTrigger aria-label="Filter by type" className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All types</SelectItem>
            {kinds.map((k) => (
              <SelectItem key={k} value={k}>{k}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {(term || kind !== ALL) && <Button variant="ghost" onClick={clearAll}>Clear</Button>}
        <span aria-live="polite" className="ml-auto font-mono text-[length:var(--text-xs)] text-muted-foreground tabular-nums">
          {results.length} {results.length === 1 ? 'creation' : 'creations'}
        </span>
      </div>

      <PostList
        empty="No creations match that search."
        posts={results.map((c) => ({
          href: c.url,
          date: formatDate(c.date),
          title: c.title,
          description: c.blurb,
          thumb: c.image ?? undefined,
          badges: badges(c),
        }))}
      />
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="ui-article__summary !max-w-none">
      <p id="contact-title" className="ui-label ui-article__summary-title">Contact</p>
      <p className="mb-[var(--space-3)] max-w-[36rem] text-muted-foreground">
        Got an idea, a question about something here, or a project in mind? Send me a note.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="font-display text-[length:var(--display-2)] leading-tight break-words text-foreground underline decoration-1 underline-offset-[0.15em] hover:text-[var(--pub-accent)]"
      >
        {site.email}
      </a>
    </section>
  )
}
