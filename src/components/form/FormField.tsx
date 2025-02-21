import { ReactElement, ReactNode, cloneElement, useId } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export type FormFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'control'
> &
  Required<Pick<UseControllerProps<T>, 'control'>> & {
    label?: ReactNode
    labelClassName?: string
    children: ReactElement
    required?: boolean
    onChangePropName?: string
    className?: string
    fieldId?: string
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
  const { field, fieldState } = useController(props)

  fieldId = propFieldId || fieldId

  return (
    <div className={twMerge('mb-6', className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className={twMerge('mb-1 inline-block text-sm', labelClassName)}
        >
          {label}{' '}
          <span aria-hidden='true' className='text-red-500'>
            {required && '*'}
          </span>
        </label>
      )}
      {cloneElement(children, {
        [onChangePropName]: field.onChange,
        id: fieldId,
        __required: required,
        __invalid: !!fieldState.error,
      })}
      {!!fieldState.error && (
        <span role='alert' className='mt-1.5 inline-block text-sm text-red-500'>
          {fieldState.error.message}
        </span>
      )}
    </div>
  )
}
