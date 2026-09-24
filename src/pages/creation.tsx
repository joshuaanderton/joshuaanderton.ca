import { useEffect, useState } from 'react'
import { ExternalLinkIcon } from 'lucide-react'

import { convoLink, fileUrl, getCreation, type Creation, type Step } from '@/lib/creations'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs } from '@/components/ui/tabs'
import { Chip } from '@/components/chip'
import { EmptyState } from '@/components/empty-state'

const gutter = 'px-[clamp(1.25rem,8vw,7rem)]'

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
      <main className={cn(gutter, 'py-[clamp(3rem,7vw,5.5rem)]')}>
        <EmptyState
          art="lock"
          message="That creation doesn't exist, or hasn't been published yet."
          action={
            <Button variant="link" asChild>
              <a href="/#creations">See all creations</a>
            </Button>
          }
        />
      </main>
    )
  }

  const shots = creation.steps.filter((s) => s.screenshot)

  return (
    <main>
      <PostHeader creation={creation} />
      <Embed creation={creation} />
      {shots.length > 1 && <Scrubber slug={creation.slug} steps={shots} />}
      <Timeline creation={creation} />
    </main>
  )
}

function PostHeader({ creation }: { creation: Creation }) {
  const steps = creation.steps.length
  return (
    <section
      aria-labelledby="post-title"
      className={cn(gutter, 'rounded-bl-soft bg-panel pt-[clamp(2.5rem,6vw,4rem)] pb-[clamp(2rem,4vw,2.75rem)]')}
    >
      <a href="/#creations" className="text-[0.95rem] font-semibold underline underline-offset-[0.2em]">
        All creations
      </a>
      <div className="mt-8 flex flex-col gap-4">
        <Chip>{creation.kind}</Chip>
        <h1 id="post-title" className="text-[clamp(2.5rem,5.5vw,3.75rem)] leading-none font-semibold tracking-display">
          {creation.title}
          {creation.isDraft && <Badge className="ml-3 align-middle text-sm">Draft</Badge>}
        </h1>
        <p className="max-w-[30rem] text-[clamp(1.125rem,1.6vw,1.3125rem)] leading-[1.45]">{creation.summary}</p>
      </div>
      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.875rem]">
        <div>
          <dt className="text-muted-foreground">Started</dt>
          <dd className="font-medium tabular-nums">{formatDate(creation.started)}</dd>
        </div>
        {creation.published && (
          <div>
            <dt className="text-muted-foreground">Published</dt>
            <dd className="font-medium tabular-nums">{formatDate(creation.published)}</dd>
          </div>
        )}
        <div>
          <dt className="text-muted-foreground">Process</dt>
          <dd className="font-medium tabular-nums">
            {steps} {steps === 1 ? 'step' : 'steps'}
          </dd>
        </div>
      </dl>
    </section>
  )
}

function Embed({ creation }: { creation: Creation }) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')
  const src = fileUrl(creation.slug, creation.embed)

  return (
    <section aria-label="Live version" className={cn(gutter, 'pt-[clamp(2rem,4vw,3rem)]')}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b pb-3">
        <Tabs
          label="Preview size"
          value={view}
          onValueChange={setView}
          options={[
            { value: 'desktop', label: 'Desktop' },
            { value: 'mobile', label: 'Mobile' },
          ]}
        />
        <div className="flex flex-wrap gap-x-5">
          <Button variant="link" asChild>
            <a href={src} target="_blank" rel="noopener">
              Open full screen
              <ExternalLinkIcon aria-hidden="true" />
            </a>
          </Button>
          {creation.live && (
            <Button variant="link" asChild>
              <a href={creation.live} target="_blank" rel="noopener">
                Visit live site
                <ExternalLinkIcon aria-hidden="true" />
              </a>
            </Button>
          )}
        </div>
      </div>
      <div className="flex justify-center rounded-tl-feature bg-outer p-[clamp(0.5rem,2vw,1.5rem)]">
        <iframe
          key={view}
          src={src}
          title={`${creation.title}, live version`}
          sandbox="allow-scripts allow-popups allow-forms"
          className={cn(
            'block border border-foreground bg-background',
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
    <section aria-labelledby="scrub-title" className={cn(gutter, 'pt-[clamp(3rem,7vw,5.5rem)]')}>
      <h2 id="scrub-title" className="text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none font-semibold tracking-display">
        Step by step
      </h2>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <input
          type="range"
          min={0}
          max={steps.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          aria-label="Step"
          aria-valuetext={`Step ${step.n}: ${step.title}`}
          className="h-10 flex-1 basis-60 accent-foreground"
        />
        <p className="min-w-60 font-medium tabular-nums" aria-hidden="true">
          Step {step.n}: {step.title}
        </p>
      </div>
      <img
        src={fileUrl(slug, step.screenshot!)}
        alt={`Step ${step.n}: ${step.title}`}
        className="mt-4 block w-full border bg-panel"
      />
    </section>
  )
}

function Timeline({ creation }: { creation: Creation }) {
  return (
    <section
      aria-labelledby="process-title"
      className={cn(gutter, 'pt-[clamp(3rem,7vw,5.5rem)] pb-[clamp(3rem,7vw,5.5rem)]')}
    >
      <h2 id="process-title" className="mb-8 text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none font-semibold tracking-display">
        Process
      </h2>
      {creation.steps.length === 0 ? (
        <EmptyState art="pencil" message="No steps recorded yet." action={null} />
      ) : (
        <ol className="border-t">
          {creation.steps.map((step) => (
            <li key={step.n} className="border-b">
              {step.kind === 'under-the-hood' ? (
                <details className="group py-5">
                  <summary className="cursor-pointer font-medium">
                    Step {step.n}: {step.title} <span className="font-normal text-muted-foreground">(under the hood)</span>
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
    <article
      aria-labelledby={`step-${step.n}`}
      className={cn('grid gap-6 py-8 min-[821px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]', deadEnd && 'opacity-60')}
    >
      {shot && openHref ? (
        <a
          href={openHref}
          target="_blank"
          rel="noopener"
          className="block self-start rounded-bl-hover border border-transparent p-2 transition-colors duration-150 ease-out hover:border-foreground hover:bg-panel focus-visible:border-foreground focus-visible:bg-panel focus-visible:outline-none"
        >
          <img src={shot} alt={`Step ${step.n}: ${step.title}`} loading="lazy" className="block w-full border bg-panel" />
          <span className="sr-only">{step.snapshot ? 'Open this version' : 'Open screenshot'}</span>
        </a>
      ) : (
        <div className="hidden min-[821px]:block" />
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
        <h3 id={`step-${step.n}`} className="text-2xl leading-[1.1] font-semibold tracking-title">
          <span className="text-muted-foreground tabular-nums">Step {step.n}</span>{' '}
          <span className={cn(step.kind === 'dead-end' && 'line-through')}>{step.title}</span>
          {label && <Badge className="ml-2">{label}</Badge>}
        </h3>
      )}
      {step.prompt && (
        <blockquote className="max-w-[36rem] rounded-tl-soft bg-panel px-4 py-3">
          <p className="sr-only">Prompt:</p>
          <p>{step.prompt}</p>
        </blockquote>
      )}
      <p className="max-w-[36rem] text-sm text-muted-foreground">{step.note}</p>
      <p className="text-sm text-muted-foreground tabular-nums">{formatDate(step.date)}</p>
      {convo && (
        <a href={convo} target="_blank" rel="noopener" className="self-start text-sm font-semibold underline underline-offset-[0.2em]">
          Read the conversation
        </a>
      )}
    </div>
  )
}
