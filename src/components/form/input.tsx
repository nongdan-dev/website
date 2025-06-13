import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type InputProps = React.ComponentProps<'input'> & {
  __invalid?: true
  __required?: true
  containerClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ __invalid, __required, containerClassName, className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          'relative flex h-12 items-center',
          containerClassName,
        )}
      >
        <input
          ref={ref}
          {...props}
          aria-required={__required}
          aria-invalid={__invalid}
          className={twMerge(
            'block h-full w-full rounded-md border bg-white px-4 outline-0 transition-all focus:ring-2',
            __invalid
              ? 'border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 hover:border-primary-500 focus:border-primary-500 focus:ring-primary-500',
            className,
          )}
        />
      </div>
    )
  },
)
