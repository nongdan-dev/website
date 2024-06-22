import RcSelect, { SelectProps as RcSelectProps } from 'rc-select'
import { IoChevronDown } from 'react-icons/io5'

import 'rc-select/assets/index.css'

export type SelectProps = RcSelectProps

function Select(props: SelectProps) {
  return (
    <RcSelect
      {...props}
      suffixIcon={<IoChevronDown />}
      menuItemSelectedIcon={null}
      open
      notFoundContent={<div className='py-2'>No options</div>}
    >
      {props.children}
    </RcSelect>
  )
}

Select.Option = RcSelect.Option
export { Select }
