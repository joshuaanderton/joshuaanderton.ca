import type { ReactNode } from 'react'

import type { ArtKey } from '@/lib/specimens'
import { Specimen } from './specimen'

/** A specimen, one sentence saying what happened, and one action. */
export function EmptyState({ art, message, action }: { art: ArtKey; message: string; action: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 py-12 text-center">
      <Specimen name={art} className="size-32" />
      <p className="text-muted-foreground">{message}</p>
      {action}
    </div>
  )
}
