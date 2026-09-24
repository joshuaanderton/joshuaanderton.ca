import * as React from 'react'

import { cn } from '@/lib/utils'
import { BrandMark } from '@/components/brand-mark'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('rounded-none rounded-tl-feature bg-card p-6 text-card-foreground sm:px-10 sm:pt-9 sm:pb-12', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn('mb-3 flex items-center justify-between gap-4 border-b pb-4 sm:mb-7 sm:pb-5', className)}
      {...props}
    />
  )
}

/** Card title with the brand mark in front, per the design system. */
function CardTitle({ className, children, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="card-title"
      className={cn('flex items-center gap-2.5 text-2xl leading-[1.1] font-semibold tracking-title', className)}
      {...props}
    >
      <BrandMark className="size-5" />
      {children}
    </h2>
  )
}

function CardMeta({ className, ...props }: React.ComponentProps<'span'>) {
  return <span data-slot="card-meta" className={cn('text-lg text-muted-foreground', className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn(className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardMeta, CardContent }
