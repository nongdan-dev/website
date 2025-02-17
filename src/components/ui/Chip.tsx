import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Tone = 'primary'
type Size = 'small' | 'medium' | 'large'
type Shape = 'square' | 'rounded' | 'pill'
type bordered = boolean

export type ChipProps = ComponentProps<'span'> & {
  tone?: Tone
  size?: Size
  shape?: Shape
  bordered?: bordered
}

const baseClasses =
  'inline-flex flex-1 flex-wrap min-w-fit place-items-center place-content-center font-medium gap-1 px-2.5 py-0.5'

const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary-50 text-primary-500',
}

const borderedClasses: Record<Tone, string> = {
  primary: 'border border-primary-400',
}

const sizeClasses: Record<Size, string> = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-base',
}

const shapeClasses: Record<Shape, string> = {
  square: 'rounded-none',
  rounded: 'rounded-lg',
  pill: 'rounded-full',
}

export function Chip({
  tone = 'primary',
  size = 'small',
  shape = 'pill',
  bordered = false,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      {...props}
      className={twMerge(
        baseClasses,
        toneClasses[tone],
        sizeClasses[size],
        shapeClasses[shape],
        bordered && borderedClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
