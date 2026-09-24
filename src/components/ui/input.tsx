import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-11 w-full min-w-0 rounded-md border border-input bg-background px-3.5 text-[0.95rem] shadow-lip placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        '[&::-webkit-search-cancel-button]:appearance-none',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
