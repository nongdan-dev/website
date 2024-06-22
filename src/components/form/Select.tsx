import RcSelect, { SelectProps as RcSelectProps } from 'rc-select'
import { IoChevronDown } from 'react-icons/io5'

export type SelectProps = RcSelectProps

export function Select(props: SelectProps) {
  return (
    <RcSelect
      {...props}
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
