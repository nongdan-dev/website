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
      className={twMerge(
        'block w-full rounded-md border border-gray-300 p-2 text-sm outline-none transition-colors hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500',
        className,
      )}
    />
  )
}
