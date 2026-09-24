import * as React from 'react'

import { cn } from '@/lib/utils'
import { buttonVariants } from './button'

/**
 * Tabs per the design system: the active tab is ink-filled, the rest are ghost,
 * and they sit on a hairline with no pill container.
 */
function Tabs<T extends string>({
  value,
  onValueChange,
  options,
  label,
  className,
}: {
  value: T
  onValueChange: (value: T) => void
  options: { value: T; label: React.ReactNode }[]
  label: string
  className?: string
}) {
  return (
    <div role="radiogroup" aria-label={label} className={cn('flex gap-1', className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(buttonVariants({ variant: value === option.value ? 'default' : 'ghost' }), 'h-9 px-3')}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export { Tabs }
