import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 px-[clamp(1.25rem,8vw,7rem)] pt-6 pb-10 text-[0.9rem]">
      <span>
        © <span className="tabular-nums">{new Date().getFullYear()}</span> {site.name}
      </span>
    </footer>
  )
}
