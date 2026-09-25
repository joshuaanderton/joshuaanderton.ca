import { Button, Display, Eyebrow } from '@polarizetech/polarize-ui/react'

import headshot from '@/assets/headshot.jpg'
import { SocialIcon } from '@/components/social-icon'
import { site } from '@/lib/site'

/** The home page is a profile: portrait, one line about me, and where to find me. */
export function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-6xl items-center px-[clamp(1.25rem,5vw,3rem)] py-[var(--space-8)]">
      <div className="grid w-full items-center gap-[clamp(2rem,6vw,5rem)] md:grid-cols-[auto_minmax(0,1fr)]">
        <img
          src={headshot}
          alt={`Portrait of ${site.name}`}
          width={320}
          height={320}
          className="size-[clamp(14rem,34vw,24rem)] rounded-[var(--radius-lg)] border object-cover"
        />

        <div className="flex flex-col gap-[var(--space-5)]">
          <Eyebrow accent>{site.name}</Eyebrow>
          <Display level={1} className="max-w-[16ch] text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.02]">
            {site.intro}
          </Display>

          <ul className="mt-[var(--space-2)] flex flex-wrap gap-2">
            {site.links.map((link) => (
              <li key={link.href}>
                <Button variant="outline" size="icon-lg" asChild>
                  <a href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
                    <SocialIcon name={link.icon} className="size-4" />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
