import { cn } from '@/lib/utils'

/** Four shapes in a 2 × 2 grid, filled with foreground. Never recolour or outline it. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('shrink-0 fill-foreground', className)}>
      <rect x="1" y="1" width="10" height="10" rx="2.5" />
      <circle cx="18" cy="6" r="5" />
      <path d="M1 13h10v10A10 10 0 0 1 1 13z" />
      <rect x="13" y="13" width="10" height="10" rx="5" />
    </svg>
  )
}
