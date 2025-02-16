import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Tone = 'primary'
type Impact = 'bold' | 'light' | 'none'
type Size = 'small' | 'medium' | 'large'
type Shape = 'square' | 'rounded' | 'pill'

export type ButtonProps = ComponentProps<'button'> & {
  tone?: Tone
  impact?: Impact
  size?: Size
  shape?: Shape
  asChild?: boolean
}

const baseClasses =
  'inline-flex flex-1 flex-wrap min-w-fit place-items-center place-content-center gap-3 font-medium transition-colors active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const impactClasses: Record<Tone, Record<Impact, string>> = {
  primary: {
    bold: 'bg-primary-500 text-primary-50 hover:bg-primary-600',
    light: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    none: 'bg-transparent text-primary-700 hover:bg-primary-50',
  },
}

const sizeClasses: Record<Size, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-6 h-12 text-base',
  large: 'px-7 py-2.5 text-lg',
}

const shapeClasses: Record<Shape, string> = {
  square: 'rounded-none',
  rounded: 'rounded-lg',
  pill: 'rounded-full',
}

export function Button({
  tone = 'primary',
  impact = 'bold',
  size = 'medium',
  shape = 'rounded',
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={twMerge(
        baseClasses,
        impactClasses[tone][impact],
        sizeClasses[size],
        shapeClasses[shape],
        className,
      )}
      {...props}
    />
  )
}
