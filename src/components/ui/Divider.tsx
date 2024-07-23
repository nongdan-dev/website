import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Direction = 'vertical' | 'horizontal'

export type DividerProps = ComponentProps<'div'> & {
  direction?: Direction
}

const directionClasses: Record<Direction, string> = {
  vertical:
    'flex-col mx-4 w-4 h-40 before:h-full before:w-px after:h-full after:w-px',
  horizontal:
    'flex-row my-4 h-4 w-full before:h-px before:w-full after:h-px after:w-full',
}

export function Divider({
  children,
  className,
  direction = 'horizontal',
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'relative flex items-center whitespace-nowrap text-sm before:bg-gray-200 after:bg-gray-200 [&:not(:empty)]:gap-4',
        directionClasses[direction],
        className,
      )}
    >
      {children}
    </div>
  )
}
