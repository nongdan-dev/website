import { omit } from 'lodash'
import { ReactElement, ReactNode, cloneElement, useId } from 'react'
import {
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export type FormFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'control'
> &
  Required<Pick<UseControllerProps<T>, 'control'>> & {
    label?: ReactNode
    labelClassName?: string
    children: ReactElement | ((props: FieldProps) => ReactElement)
    required?: boolean
    onChangePropName?: string
    className?: string
    fieldId?: string
  }

type FieldProps = {
  field: ControllerRenderProps<any, any>
  id: string
  __required?: boolean
  __invalid: boolean
}

export function FormField<T extends FieldValues>({
  label,
  labelClassName,
  children,
  required,
  onChangePropName = 'onChange',
  className,
  fieldId: propFieldId,
  ...props
}: FormFieldProps<T>) {
  let fieldId = useId()
  fieldId = propFieldId || fieldId
  const { field, fieldState } = useController(props)

  const p: FieldProps = {
    field,
    id: fieldId,
    __required: required,
    __invalid: !!fieldState.error,
  }

  return (
    <div className={twMerge('mb-6', className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className={twMerge(
            'mb-1.5 inline-block text-sm font-medium',
            labelClassName,
          )}
        >
          {label}{' '}
          <span aria-hidden='true' className='text-red-500'>
            {required && '*'}
          </span>
        </label>
      )}
      {typeof children === 'function'
        ? children(p)
        : cloneElement(children, {
            [onChangePropName]: field.onChange,
            ...omit(p, 'field'),
          })}
      {!!fieldState.error && (
        <span role='alert' className='mt-1.5 inline-block text-sm text-red-500'>
          {fieldState.error.message}
        </span>
      )}
    </div>
  )
}
