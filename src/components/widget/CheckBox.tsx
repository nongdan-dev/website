import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from '../icons'

interface CheckBoxProps {
  id: string
  value: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const CheckBox = ({ id, value, checked, onChange }: CheckBoxProps) => {
  return (
    <div key={value} className='flex items-center space-x-2'>
      <Checkbox.Root
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        className='flex h-6 w-6 items-center justify-center rounded-[3px] border border-gray-300 bg-white hover:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
      >
        <Checkbox.Indicator className='text-primary-500'>
          <Check className='h-4 w-4' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id} className='cursor-pointer text-sm leading-none'>
        {value}
      </label>
    </div>
  )
}

export default CheckBox
