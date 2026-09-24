import { useMemo, useRef, useState } from 'react'
import { SearchIcon } from 'lucide-react'

import { creations, hasCreations, kinds } from '@/lib/creations'
import { bench, site } from '@/lib/site'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Chip } from '@/components/chip'
import { EmptyState } from '@/components/empty-state'
import { FramedGrid } from '@/components/framed-grid'
import { SpecimenTile } from '@/components/specimen-tile'
import { SplitSheet } from '@/components/split-sheet'

const ALL = 'all'

export function Home() {
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

  const filtered = term.trim() !== '' || kind !== ALL
  // With the creations sections hidden, About is the page's main heading.
  const AboutHeading = hasCreations ? 'h2' : 'h1'

  function clearAll() {
    setTerm('')
    setKind(ALL)
    searchRef.current?.focus()
  }

  return (
    <main>
      {hasCreations && (
        <>
          <section
            id="creations"
            aria-labelledby="creations-title"
            className="rounded-bl-soft bg-panel px-[clamp(1.25rem,8vw,7rem)] pt-[clamp(2.5rem,6vw,4rem)] pb-[clamp(2rem,4vw,2.75rem)]"
          >
            <h1
              id="creations-title"
              className="mb-7 text-[clamp(2.5rem,5.5vw,3.75rem)] leading-none font-semibold tracking-display"
            >
              Latest creations
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <label className="relative max-w-md flex-1 basis-80">
                <span className="sr-only">Search creations</span>
                <SearchIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
                />
                <Input
                  ref={searchRef}
                  type="search"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  placeholder="Search for a creation…"
                  autoComplete="off"
                  className="pl-[38px]"
                />
              </label>

              <Select value={kind} onValueChange={setKind}>
                <SelectTrigger aria-label="Filter by type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>All types</SelectItem>
                  {kinds.map((k) => (
                    <SelectItem key={k} value={k}>
                      {k}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="link" onClick={clearAll} className="min-[821px]:ml-auto">
                Clear all
              </Button>
            </div>
          </section>

          <section
            aria-live="polite"
            aria-label="Results"
            className="px-[clamp(1.25rem,8vw,7rem)] pt-[clamp(2rem,4vw,3rem)] pb-[clamp(3rem,7vw,5.5rem)]"
          >
            <div className="mb-7 flex flex-wrap justify-between gap-4 text-[0.975rem]">
              <span className="tabular-nums">
                {results.length} {results.length === 1 ? 'creation' : 'creations'} found.
              </span>
              <span className="text-muted-foreground">Updated as they ship.</span>
            </div>

            {results.length > 0 ? (
              <ul className="grid grid-cols-2 gap-2 min-[521px]:grid-cols-[repeat(auto-fill,minmax(min(100%,14.5rem),1fr))]">
                {results.map((c) => (
                  <li key={c.slug}>
                    <SpecimenTile
                      href={c.url}
                      title={c.title}
                      meta={c.blurb}
                      art={c.art}
                      image={c.image}
                      badge={
                        c.isDraft ? (
                          <Badge className="ml-1.5">Draft</Badge>
                        ) : c.isNew ? (
                          <Badge className="ml-1.5">New</Badge>
                        ) : null
                      }
                    />
                  </li>
                ))}
              </ul>
            ) : filtered ? (
              <EmptyState
                art="paper"
                message="No creations match that search."
                action={
                  <Button variant="link" onClick={clearAll}>
                    Clear filters
                  </Button>
                }
              />
            ) : (
              <EmptyState
                art="pencil"
                message="Nothing is published yet. New creations show up here as they ship."
                action={
                  <Button variant="link" asChild>
                    <a href="#contact">Get in touch</a>
                  </Button>
                }
              />
            )}
          </section>
        </>
      )}

      <SplitSheet
        id="about"
        labelledBy="about-title"
        side={
          <>
            <Chip>About</Chip>
            <AboutHeading
              id="about-title"
              className="mt-1 mb-2 text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none font-semibold tracking-display"
            >
              Joshua Anderton
            </AboutHeading>
            <p className="max-w-[30rem] text-[clamp(1.125rem,1.6vw,1.3125rem)] leading-[1.45]">
              Software developer living in Victoria, BC.
            </p>
            <p className="max-w-[30rem] text-[clamp(1.125rem,1.6vw,1.3125rem)] leading-[1.45]">
              Off screen I solder cables, poke at signals and write songs. Dad first, everything else second.
            </p>
          </>
        }
      >
        {site.show.bench && <FramedGrid items={bench} label="Things on my workbench" />}
      </SplitSheet>
    </main>
  )
}
