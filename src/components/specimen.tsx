import { ART, type ArtKey } from '@/lib/specimens'
import { cn } from '@/lib/utils'

/** A specimen illustration. Decorative: the visible label next to it carries the meaning. */
export function Specimen({ name, className }: { name: ArtKey; className?: string }) {
  return (
    <svg
      className={cn('sp', className)}
      viewBox="0 0 200 200"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ART[name] }}
    />
  )
}
