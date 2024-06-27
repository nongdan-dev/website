import RcSelect, {
  BaseSelectRef,
  SelectProps as RcSelectProps,
} from 'rc-select'
import { forwardRef } from 'react'
import { IoChevronDown } from 'react-icons/io5'

export type SelectProps = RcSelectProps & {
  __invalid?: true
  __required?: true
}

export const Select = forwardRef<BaseSelectRef, SelectProps>(
  ({ __invalid, __required, ...props }, ref) => {
    return (
      <RcSelect
        {...props}
        ref={ref}
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
  },
)
