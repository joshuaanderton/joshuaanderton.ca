import type { ReactNode } from 'react'

import type { ArtKey } from '@/lib/specimens'
import { Specimen } from './specimen'

/** The catalogue item in the creations grid. The whole tile is one link. */
export function SpecimenTile({
  href,
  title,
  meta,
  art,
  image,
  badge,
}: {
  href: string
  title: string
  meta: string
  art: ArtKey
  image?: string | null
  badge?: ReactNode
}) {
  return (
    <a
      href={href}
      className="block rounded-bl-hover border border-transparent px-2 pt-3 pb-4 text-center no-underline transition-colors duration-150 ease-out hover:border-foreground hover:bg-panel focus-visible:border-foreground focus-visible:bg-panel focus-visible:outline-none sm:p-4 sm:pb-5"
    >
      <div className="mx-auto aspect-square max-w-44">
        {image ? <img src={image} alt="" className="size-full rounded object-cover" /> : <Specimen name={art} />}
      </div>
      <h3 className="mt-3.5 text-[1.0625rem] leading-[1.3] font-medium tracking-[-0.01em]">
        {title}
        {badge}
      </h3>
      <p className="text-sm text-muted-foreground">{meta}</p>
    </a>
  )
}
