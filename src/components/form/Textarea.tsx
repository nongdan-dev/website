import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextareaProps = ComponentProps<'textarea'> & {
  __invalid?: true
  __required?: true
}

export function Textarea({
  __invalid,
  __required,
  rows = 6,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      rows={rows}
      {...props}
      aria-required={__required}
      aria-invalid={__invalid}
      className={twMerge(
        'block w-full rounded-md border p-2 text-sm outline-none transition-colors focus:ring-2',
        __invalid
          ? 'border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500'
          : 'border-gray-300 hover:border-primary-500 focus:border-primary-500 focus:ring-primary-500',
        className,
      )}
    />
  )
}
