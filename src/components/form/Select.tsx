import RcSelect, { SelectProps as RcSelectProps } from 'rc-select'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { IoChevronDown } from 'react-icons/io5'

export type SelectProps = Omit<RcSelectProps, 'children' | 'onChange'> & {
  __invalid?: true
  __required?: true
  onChange?: (value: DefaultOptionType) => void
}

export function Select({
  __invalid,
  __required,
  onChange,
  ...props
}: SelectProps) {
  return (
    <RcSelect
      {...props}
      aria-required={__required}
      aria-invalid={__invalid}
      virtual={false}
      suffixIcon={<IoChevronDown />}
      menuItemSelectedIcon={null}
      notFoundContent={<div className='py-2'>No options</div>}
      onChange={(_, v) => onChange?.(v)}
    />
  )
}
