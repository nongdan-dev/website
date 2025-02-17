import { ComponentProps, ReactNode, useId } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleProps = {
  titleId: string
  titleClassName: string
}

export type SectionProps = Omit<
  ComponentProps<'section'>,
  'title' | 'children'
> & {
  subtitle?: ReactNode
  title?: ReactNode | ((props: TitleProps) => ReactNode)
  children?: ReactNode | ((props: TitleProps) => ReactNode)
}

export function Section({ title, subtitle, children, ...props }: SectionProps) {
  const titleId = useId()
  const titleClassName = 'text-title'

  const renderTitle = () => {
    if (!title) return null
    if (typeof title === 'function') {
      return title({ titleId, titleClassName })
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
      <div className='mb-12 flex flex-col gap-y-3.5'>
        {subtitle}
        {renderTitle()}
      </div>
      {typeof children === 'function'
        ? children({ titleId, titleClassName })
        : children}
    </section>
  )
}
