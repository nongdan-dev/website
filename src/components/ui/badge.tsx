import * as React from 'react'

import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
}

const variantClasses = {
  default: 'border-transparent bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300',
  destructive: 'border-transparent bg-red-500 text-white hover:bg-red-600',
  outline: 'border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50',
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-base font-semibold',
        'transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
export type { BadgeVariant }
