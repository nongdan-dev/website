import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Tone = 'primary' | 'warning' | 'danger' | 'success'
type Shape = 'square' | 'rounded' | 'pill'

export type BadgeProps = ComponentProps<'span'> & {
  tone?: Tone
  shape?: Shape
  bordered?: boolean
}

const toneClasses: Record<Tone, string> = {
  primary: 'bg-indigo-100 text-indigo-800 border-indigo-400',
  danger: 'bg-red-100 text-red-800 border-red-400',
  success: 'bg-green-100 text-green-800 border-green-400',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
}

const shapeClasses: Record<Shape, string> = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  pill: 'rounded-full',
}

export function Badge({
  tone = 'primary',
  shape = 'rounded',
  bordered,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={twMerge(
        'px-2.5 py-1 text-sm font-medium',
        bordered && 'border',
        toneClasses[tone],
        shapeClasses[shape],
        className,
      )}
    >
      {children}
    </span>
  )
}
