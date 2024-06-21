import RcSelect, { SelectProps as RcSelectProps } from 'rc-select'
import { IoChevronDown, IoClose } from 'react-icons/io5'

import 'rc-select/assets/index.css'

export type SelectProps = RcSelectProps

function Select(props: SelectProps) {
  return (
    <RcSelect
      {...props}
      suffixIcon={<IoChevronDown />}
      allowClear={{ clearIcon: <IoClose /> }}
    >
      {props.children}
    </RcSelect>
  )
}

Select.Option = RcSelect.Option
export { Select }
