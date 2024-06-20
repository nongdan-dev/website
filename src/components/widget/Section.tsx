import { ComponentProps, ReactNode, useId } from 'react'
import { twMerge } from 'tailwind-merge'

export type SectionProps = Omit<
  ComponentProps<'section'>,
  'title' | 'children'
> & {
  title?:
    | ReactNode
    | (({
        titleId,
        className,
      }: {
        titleId: string
        className: string
      }) => ReactNode)
  subtitle?: string
  children?: ReactNode | ((titleId: string) => ReactNode)
}

export function Section({ title, subtitle, children, ...props }: SectionProps) {
  const titleId = useId()

  const titleClassName =
    'mb-8 text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'

  const renderTitle = () => {
    if (!title) return null
    if (typeof title === 'function') {
      return title({ titleId, className: titleClassName })
    }
    return (
      <h2 id={titleId} className={titleClassName}>
        {title}
      </h2>
    )
  }

  return (
    <section
      {...props}
      aria-labelledby={titleId}
      className={twMerge('col-content py-20', props.className)}
    >
      {!!subtitle && (
        <span
          aria-hidden='true'
          className='mb-2 block text-base font-medium uppercase text-gray-400'
        >
          {subtitle}
        </span>
      )}
      {renderTitle()}
      {typeof children === 'function' ? children(titleId) : children}
    </section>
  )
}
