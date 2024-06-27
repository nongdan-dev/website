import { ReactElement, cloneElement, useId } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

export type FormFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'control'
> &
  Required<Pick<UseControllerProps<T>, 'control'>> & {
    label: string
    children: ReactElement
    required?: boolean
    onChangePropName?: string
  }

export function FormField<T extends FieldValues>({
  label,
  children,
  required,
  onChangePropName = 'onChange',
  ...props
}: FormFieldProps<T>) {
  const fieldId = useId()
  const { field, fieldState } = useController(props)

  return (
    <div className='mb-6'>
      <label htmlFor={fieldId} className='mb-1 inline-block text-sm'>
        {label}{' '}
        <span aria-hidden='true' className='text-red-500'>
          {required && '*'}
        </span>
      </label>
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
