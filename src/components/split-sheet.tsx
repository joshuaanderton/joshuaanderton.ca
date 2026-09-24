import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * Two columns: a panel side with bottom-aligned content, and a framed grid. Stacks at 820px.
 * Without children, the panel side takes the full width.
 */
export function SplitSheet({
  id,
  labelledBy,
  side,
  children,
}: {
  id?: string
  labelledBy?: string
  side: ReactNode
  children?: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('grid border-t', children && 'min-[821px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]')}
    >
      <div className="flex flex-col gap-4 bg-panel px-[clamp(1.25rem,5vw,3.5rem)] pt-12 pb-[clamp(2rem,5vw,3.5rem)] min-[821px]:justify-end min-[821px]:pt-[clamp(2rem,5vw,3.5rem)]">
        {side}
      </div>
      {children}
    </section>
  )
}
