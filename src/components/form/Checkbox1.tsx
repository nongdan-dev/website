import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { ReactNode, useId } from 'react'
import { twMerge } from 'tailwind-merge'

import { Check } from '../icons'

export type CheckboxProps = Omit<RadixCheckbox.CheckboxProps, 'required'> & {
  label: ReactNode
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <RadixCheckbox.Root
        id={id}
        {...props}
        className={twMerge(
          'flex h-6 w-6 items-center justify-center rounded-[3px] border border-gray-300 bg-white outline-0 transition-all',
          'data-[state="checked"]:bg-primary-500',
          'hover:border-primary-500 focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-500',
        )}
      >
        <RadixCheckbox.Indicator className=''>
          <Check className='text-white' />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id} className='cursor-pointer text-sm leading-none'>
        {label}
      </label>
    </div>
  )
}
