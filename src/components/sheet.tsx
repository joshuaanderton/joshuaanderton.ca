import type { ReactNode } from 'react'

/** The page surface on the outer backdrop. Full width with square corners, so it runs straight across. */
export function Sheet({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden bg-background">{children}</div>
}

/** Keeps content at the sheet's max width while its section's background runs edge to edge. */
export const contentWidth = 'mx-auto w-full max-w-[90rem]'
