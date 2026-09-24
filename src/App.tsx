import { ContactCard } from '@/components/contact-card'
import { Sheet } from '@/components/sheet'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { CreationPage } from '@/pages/creation'
import { Home } from '@/pages/home'

// Two routes, served as static pages: / and /creations/<slug>/ (emitted by vite.config.ts).
function route(pathname: string) {
  const match = pathname.match(/^\/creations\/([^/]+)\/?$/)
  return match ? <CreationPage slug={decodeURIComponent(match[1])} /> : <Home />
}

function App() {
  return (
    <>
      <Sheet>
        <SiteHeader />
        {route(window.location.pathname)}
      </Sheet>
      <ContactCard />
      <SiteFooter />
    </>
  )
}

export default App
