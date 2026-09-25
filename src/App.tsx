import { site } from '@/lib/site'
import { Home } from '@/pages/home'

// One page for now: every path renders the profile.
function App() {
  return (
    <>
      <Home />
      {site.show.copyright && (
        <footer className="px-[clamp(1.25rem,5vw,3rem)] pb-[var(--space-6)] text-center font-mono text-[length:var(--text-xs)] text-muted-foreground">
          © <span className="tabular-nums">{new Date().getFullYear()}</span> {site.name}
        </footer>
      )}
    </>
  )
}

export default App
