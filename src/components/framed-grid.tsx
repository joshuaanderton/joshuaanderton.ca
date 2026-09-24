import type * as React from 'react'

import type { ArtKey } from '@/lib/specimens'
import { cn } from '@/lib/utils'
import { Specimen } from './specimen'

/** A dark tab pinned to the bottom-left of a framed tile. */
export function LabelTab({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute bottom-0 left-0 rounded-tr-[0.55rem] bg-tab py-1.5 pr-3 pl-2.5 text-sm leading-tight font-medium text-tab-foreground">
      {children}
    </span>
  )
}

/**
 * Tiles that touch and share hairlines. Borders sit on the cells, not a coloured gap,
 * so an unfilled last row doesn't show bands.
 */
export function FramedGrid({
  items,
  label,
  className,
}: {
  items: [ArtKey, string][]
  label: string
  className?: string
}) {
  return (
    <ul aria-label={label} className={cn('grid grid-cols-2 self-start border-l min-[521px]:grid-cols-3', className)}>
      {items.map(([art, name]) => (
        <li
          key={art}
          className="relative aspect-square border-r border-b bg-background"
        >
          <div className="absolute inset-[8%_8%_16%]">
            <Specimen name={art} />
          </div>
          <LabelTab>{name}</LabelTab>
        </li>
      ))}
    </ul>
  )
}
