import { ComponentProps, ReactNode, useId } from 'react'
import { twMerge } from 'tailwind-merge'

export type SectionProps = Omit<
  ComponentProps<'section'>,
  'title' | 'children'
> & {
  title?: ReactNode
  subtitle?: string
  children?: ReactNode | ((titleId: string) => ReactNode)
}

export function Section({ title, subtitle, children, ...props }: SectionProps) {
  const titleId = useId()

  return (
    <section
      {...props}
      aria-labelledby={titleId}
      className={twMerge('col-content py-20', props.className)}
    >
      {!!subtitle && (
        <span
          aria-hidden='true'
          className='mb-4 block text-base font-medium uppercase text-gray-400'
        >
          {subtitle}
        </span>
      )}
      {!!title && (
        <h2
          id={titleId}
          className='mb-8 text-balance text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug'
        >
          {title}
        </h2>
      )}
      {typeof children === 'function' ? children(titleId) : children}
    </section>
  )
}
