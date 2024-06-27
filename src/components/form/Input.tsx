import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type InputProps = ComponentProps<'input'> & {
  __invalid?: true
  __required?: true
  containerClassName?: string
  prefix?: ReactNode
  suffix?: ReactNode
}

function Append(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      aria-hidden='true'
      className={twMerge(
        'pointer-events-none absolute flex h-full w-9 items-center justify-center',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

export function Input({
  __invalid,
  __required,
  containerClassName,
  prefix,
  suffix,
  ...props
}: InputProps) {
  return (
    <div className={twMerge('relative h-10', containerClassName)}>
      {prefix && <Append className='left-0 top-0'>{prefix}</Append>}
      <input
        {...props}
        aria-required={__required}
        aria-invalid={__invalid}
        className={twMerge(
          'block h-full w-full rounded-md border border-gray-300 bg-white px-2 text-sm outline-0 transition-all hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500',
          prefix && 'pl-9',
          suffix && 'pr-9',
        )}
      />
      {suffix && <Append className='right-0 top-0'>{suffix}</Append>}
    </div>
  )
}
