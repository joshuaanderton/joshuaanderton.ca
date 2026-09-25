import { AuthorNote, Brand, Footer, Shell, SidebarMeta, SidebarSection } from '@polarizetech/polarize-ui/react'

import headshot from '@/assets/headshot.jpg'
import { SocialIcon } from '@/components/social-icon'
import { hasCreations } from '@/lib/creations'
import { site } from '@/lib/site'
import { CreationPage } from '@/pages/creation'
import { Home } from '@/pages/home'

// Two routes, served as static pages: / and /creations/<slug>/ (emitted by vite.config.ts).
function route(pathname: string) {
  const match = pathname.match(/^\/creations\/([^/]+)\/?$/)
  return match ? <CreationPage slug={decodeURIComponent(match[1])} /> : <Home />
}

function Sidebar() {
  const onHome = !window.location.pathname.startsWith('/creations/')
  return (
    <>
      <AuthorNote
        tagline={site.tagline}
        name={site.name}
        place={site.location}
        avatar={headshot}
        contactHref="#contact"
      />
      <SidebarSection
        heading="On this site"
        items={[
          ...(hasCreations ? [{ label: 'Creations', href: '/#creations', current: onHome }] : []),
          { label: 'Contact', href: '/#contact' },
        ]}
      />
      <SidebarSection
        heading="Elsewhere"
        items={site.elsewhere.map((l) => ({ label: l.label, href: l.href, count: undefined }))}
      />
      <SidebarMeta
        links={site.links.map((l) => ({ label: l.label, href: l.href, icon: <SocialIcon name={l.icon} className="size-4" /> }))}
      />
    </>
  )
}

function App() {
  return (
    <>
      <Shell brand={<Brand word={site.name} href="/" />} sidebar={<Sidebar />}>
        {route(window.location.pathname)}
      </Shell>
      <Footer brand={<Brand word={site.name} href="/" />} tagline={site.tagline}>
        © <span className="tabular-nums">{new Date().getFullYear()}</span> {site.name} · {site.location}
      </Footer>
    </>
  )
}

export default App
