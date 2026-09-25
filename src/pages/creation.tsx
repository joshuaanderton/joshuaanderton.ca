import { useEffect, useState } from 'react'
import { ExternalLinkIcon } from 'lucide-react'
import { Article, Button, Slider, Tabs, TabsList, TabsTrigger, cn } from '@polarizetech/polarize-ui/react'

import { convoLink, fileUrl, getCreation, type Creation, type Step } from '@/lib/creations'

const KIND_LABEL: Partial<Record<Step['kind'], string>> = {
  'dead-end': 'Dead end',
  pivot: 'Pivot',
  final: 'Final',
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function CreationPage({ slug }: { slug: string }) {
  const creation = getCreation(slug)

  useEffect(() => {
    document.title = creation ? `${creation.title}, a creation by Joshua Anderton` : 'Creation not found'
  }, [creation])

  if (!creation) {
    return (
      <section className="ui-doc">
        <header className="ui-doc__head">
          <p className="ui-label">Not found</p>
          <p className="ui-doc__lede mt-3">That creation doesn't exist, or hasn't been published yet.</p>
        </header>
        <Button asChild variant="outline"><a href="/">Back to the home page</a></Button>
      </section>
    )
  }

  const shots = creation.steps.filter((s) => s.screenshot)
  const steps = creation.steps.length

  return (
    <Article
      label={`${creation.kind}${creation.isDraft ? ' · Draft' : ''}`}
      title={creation.title}
      standfirst={creation.summary}
      meta={
        <dl className="flex flex-wrap gap-x-8 gap-y-2">
          <Fact label="Started" value={formatDate(creation.started)} />
          {creation.published && <Fact label="Published" value={formatDate(creation.published)} />}
          <Fact label="Process" value={`${steps} ${steps === 1 ? 'step' : 'steps'}`} />
        </dl>
      }
    >
      <p className="-mt-[var(--space-5)] mb-[var(--space-6)]">
        <a href="/" className="ui-article__topic text-[length:var(--text-sm)]">← Home</a>
      </p>
      <Embed creation={creation} />
      {shots.length > 1 && <Scrubber slug={creation.slug} steps={shots} />}
      <Timeline creation={creation} />
    </Article>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="ui-label">{label}</dt>
      <dd className="mt-1 tabular-nums">{value}</dd>
    </div>
  )
}

function Embed({ creation }: { creation: Creation }) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')
  const src = fileUrl(creation.slug, creation.embed)

  return (
    <section aria-label="Live version" className="mb-[var(--space-7)]">
      <div className="mb-[var(--space-3)] flex flex-wrap items-center justify-between gap-3 border-b pb-[var(--space-3)]">
        <Tabs value={view} onValueChange={(v) => setView(v as 'desktop' | 'mobile')}>
          <TabsList aria-label="Preview size">
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex flex-wrap gap-x-1">
          <Button variant="ghost" asChild>
            <a href={src} target="_blank" rel="noopener">Open full screen <ExternalLinkIcon aria-hidden="true" /></a>
          </Button>
          {creation.live && (
            <Button variant="ghost" asChild>
              <a href={creation.live} target="_blank" rel="noopener">Visit live site <ExternalLinkIcon aria-hidden="true" /></a>
            </Button>
          )}
        </div>
      </div>
      <div className="flex justify-center rounded-[var(--radius-base)] border bg-muted p-[clamp(0.5rem,2vw,1.5rem)]">
        <iframe
          key={view}
          src={src}
          title={`${creation.title}, live version`}
          sandbox="allow-scripts allow-popups allow-forms"
          className={cn(
            'block rounded-[var(--radius-sm)] border bg-background',
            view === 'desktop' ? 'h-[min(80vh,56rem)] min-h-[28rem] w-full' : 'h-[min(80vh,52.75rem)] w-full max-w-[390px]',
          )}
        />
      </div>
    </section>
  )
}

/** Before/after: a slider across every step screenshot. */
function Scrubber({ slug, steps }: { slug: string; steps: Step[] }) {
  const [index, setIndex] = useState(steps.length - 1)
  const step = steps[index]

  return (
    <section aria-labelledby="scrub-title" className="mb-[var(--space-7)] max-w-[var(--measure)]">
      <h2 id="scrub-title" className="ui-refs__title">Step by step</h2>
      <div className="flex flex-wrap items-center gap-4">
        <Slider
          min={0}
          max={steps.length - 1}
          step={1}
          value={[index]}
          onValueChange={([v]) => setIndex(v)}
          aria-label="Step"
          aria-valuetext={`Step ${step.n}: ${step.title}`}
          className="flex-1 basis-60"
        />
        <p className="min-w-60 font-mono text-[length:var(--text-sm)] tabular-nums" aria-hidden="true">
          Step {step.n}: {step.title}
        </p>
      </div>
      <img
        src={fileUrl(slug, step.screenshot!)}
        alt={`Step ${step.n}: ${step.title}`}
        className="mt-4 block w-full rounded-[var(--radius-base)] border bg-muted"
      />
    </section>
  )
}

function Timeline({ creation }: { creation: Creation }) {
  return (
    <section aria-labelledby="process-title" className="ui-refs">
      <h2 id="process-title" className="ui-refs__title">Process</h2>
      {creation.steps.length === 0 ? (
        <p className="text-muted-foreground">No steps recorded yet.</p>
      ) : (
        <ol className="border-t">
          {creation.steps.map((step) => (
            <li key={step.n} className="border-b">
              {step.kind === 'under-the-hood' ? (
                <details className="group py-5">
                  <summary className="cursor-pointer">
                    Step {step.n}: {step.title} <span className="text-muted-foreground">(under the hood)</span>
                  </summary>
                  <StepText slug={creation.slug} step={step} className="mt-4" />
                </details>
              ) : (
                <StepRow slug={creation.slug} step={step} />
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

function StepRow({ slug, step }: { slug: string; step: Step }) {
  const deadEnd = step.kind === 'dead-end'
  const shot = step.screenshot ? fileUrl(slug, step.screenshot) : null
  const openHref = step.snapshot ? fileUrl(slug, step.snapshot) : shot

  return (
    <article aria-labelledby={`step-${step.n}`} className={cn('grid gap-5 py-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]', deadEnd && 'opacity-60')}>
      {shot && openHref ? (
        <a href={openHref} target="_blank" rel="noopener" className="block self-start transition-opacity hover:opacity-70">
          <img src={shot} alt={`Step ${step.n}: ${step.title}`} loading="lazy" className="block w-full rounded-[var(--radius-sm)] border bg-muted" />
          <span className="sr-only">{step.snapshot ? 'Open this version' : 'Open screenshot'}</span>
        </a>
      ) : (
        <div className="hidden sm:block" />
      )}
      <StepText slug={slug} step={step} />
    </article>
  )
}

function StepText({ slug, step, className }: { slug: string; step: Step; className?: string }) {
  const label = KIND_LABEL[step.kind]
  const convo = convoLink(slug, step)

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {step.kind !== 'under-the-hood' && (
        <h3 id={`step-${step.n}`} className="font-display text-[length:var(--display-3)] leading-tight">
          <span className="font-mono text-[length:var(--text-xs)] tracking-[.1em] text-muted-foreground uppercase tabular-nums">Step {step.n}</span>{' '}
          <span className={cn(step.kind === 'dead-end' && 'line-through')}>{step.title}</span>
          {label && <span className="ui-pill ml-2 align-middle">{label}</span>}
        </h3>
      )}
      {step.prompt && (
        <blockquote className="max-w-[36rem] border-l-2 border-[var(--pub-accent)] pl-4 text-foreground">
          <p className="sr-only">Prompt:</p>
          <p>{step.prompt}</p>
        </blockquote>
      )}
      <p className="max-w-[36rem] text-[length:var(--text-sm)] text-muted-foreground">{step.note}</p>
      <p className="font-mono text-[length:var(--text-xs)] text-muted-foreground tabular-nums">{formatDate(step.date)}</p>
      {convo && (
        <a href={convo} target="_blank" rel="noopener" className="self-start text-[length:var(--text-sm)] text-[var(--pub-accent)] underline-offset-4 hover:underline">
          Read the conversation
        </a>
      )}
    </div>
  )
}
