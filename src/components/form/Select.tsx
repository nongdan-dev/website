import RcSelect, { SelectProps as RcSelectProps } from 'rc-select'
import { IoChevronDown } from 'react-icons/io5'

export type SelectProps = RcSelectProps & {
  __invalid?: true
  __required?: true
}

export function Select({ __invalid, __required, ...props }: SelectProps) {
  return (
    <RcSelect
      {...props}
      aria-required={__required}
      aria-invalid={__invalid}
      virtual={false}
      suffixIcon={<IoChevronDown />}
      menuItemSelectedIcon={null}
      className='group'
      notFoundContent={<div className='py-2'>No options</div>}
    >
      {props.children}
    </RcSelect>
  )
}
