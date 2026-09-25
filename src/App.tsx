import { AuthorNote, Brand, Shell, SidebarMeta } from '@polarizetech/polarize-ui/react'

import headshot from '@/assets/headshot.jpg'
import { SocialIcon } from '@/components/social-icon'
import { site } from '@/lib/site'
import { CreationPage } from '@/pages/creation'
import { Home } from '@/pages/home'

// Routes, served as static pages: / and /creations/<slug>/ (emitted by vite.config.ts).
// Creation pages are built but hidden while `site.show.creations` is off: every path is the profile.
function creationSlug(pathname: string) {
  if (!site.show.creations) return null
  const match = pathname.match(/^\/creations\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

function App() {
  const slug = creationSlug(window.location.pathname)

  if (!slug) {
    return (
      <>
        <Home />
        <footer className="px-[clamp(1.25rem,5vw,3rem)] pb-[var(--space-6)] text-center font-mono text-[length:var(--text-xs)] text-muted-foreground">
          © <span className="tabular-nums">{new Date().getFullYear()}</span> {site.name}
        </footer>
      </>
    )
  }

  return (
    <Shell
      brand={<Brand word={site.name} href="/" />}
      sidebar={
        <>
          <AuthorNote tagline={site.tagline} name={site.name} place={site.location} avatar={headshot} />
          <SidebarMeta
            links={site.links.map((l) => ({ label: l.label, href: l.href, icon: <SocialIcon name={l.icon} className="size-4" /> }))}
          />
        </>
      }
    >
      <CreationPage slug={slug} />
    </Shell>
  )
}

export default App
