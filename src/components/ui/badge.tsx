import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-1.5 text-xs font-semibold leading-[1.35] whitespace-nowrap align-[0.1em]',
  {
    variants: {
      variant: {
        outline: 'border border-foreground',
        solid: 'border border-tab bg-tab text-tab-foreground',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  },
)

function Badge({ className, variant, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
