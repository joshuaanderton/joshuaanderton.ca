import { hasCreations } from '@/lib/creations'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { contentWidth } from './sheet'
import { BrandMark } from './brand-mark'
import { SocialIcon } from './social-icon'

export function SiteHeader() {
  return (
    <header className="border-b border-foreground bg-background">
      <div
        className={cn(
          contentWidth,
          'flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-[clamp(1.25rem,3vw,2rem)] py-4',
        )}
      >
        <a
          href="/"
          className="flex items-center gap-2.5 text-[1.3rem] leading-none font-normal tracking-brand no-underline sm:text-2xl"
        >
          <BrandMark className="size-[26px]" />
          {site.wordmark}
          <span className="sr-only">, home</span>
        </a>

        {site.show.nav && (
          <nav aria-label="Main" className="order-last w-full sm:order-none sm:w-auto">
            <ul className="flex gap-[clamp(1rem,2.5vw,2rem)]">
              {site.nav
                .filter((item) => hasCreations || item.href !== '/#creations')
                .map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="font-medium no-underline underline-offset-[0.25em] hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-4">
          <ul className="-mr-2 flex gap-1 text-muted-foreground">
            {site.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={link.label}
                  title={link.label}
                  className="flex size-10 items-center justify-center transition-colors duration-150 hover:text-foreground"
                >
                  <SocialIcon name={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
