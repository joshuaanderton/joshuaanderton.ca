import type { ReactNode } from 'react'

/** The page surface on the outer backdrop. Square corners, so it runs straight across. */
export function Sheet({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[90rem] overflow-hidden bg-background">{children}</div>
  )
}
