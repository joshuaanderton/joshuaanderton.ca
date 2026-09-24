import type * as React from 'react'

import { cn } from '@/lib/utils'

/** A category marker above a section title. Not interactive. */
export function Chip({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('self-start rounded-md border border-foreground px-2.5 py-0.5 text-sm font-medium', className)}
      {...props}
    />
  )
}
