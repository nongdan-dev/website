import { ComponentProps, ReactNode, useId, createContext } from 'react'
import { twMerge } from 'tailwind-merge'

import { Chip, ChipProps } from '@/components/ui'
import { useContext } from '@/hooks/useContext'

type SectionCtx = {
  titleId: string
  titleClassName: string
}

const SectionContext = createContext<SectionCtx | undefined>(undefined)

export type SectionProps = ComponentProps<'section'>
export type SubTitleProps = ChipProps

export type TitleProps = Omit<ComponentProps<'h2'>, 'children'> & {
  children: ((props: SectionCtx) => ReactNode) | ReactNode
}

export type ContentProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: ((props: { contentClassName: string }) => ReactNode) | ReactNode
}

export function Section({ className, ...props }: SectionProps) {
  const titleId = useId()
  const titleClassName = 'text-title w-1/2'

  return (
    <SectionContext.Provider value={{ titleId, titleClassName }}>
      <section
        {...props}
        aria-labelledby={titleId}
        className={twMerge('col-content py-20', className)}
      />
    </SectionContext.Provider>
  )
}

export function SubTitle(props: SubTitleProps) {
  return (
    <Chip
      aria-hidden
      bordered
      {...props}
      className={twMerge('mb-2.5', props.className)}
    />
  )
}

export function Title({ children, className, ...props }: TitleProps) {
  const { titleId, titleClassName } = useContext(SectionContext)

  if (typeof children === 'function') {
    return children({ titleId, titleClassName })
  }

  return (
    <h2 {...props} id={titleId} className={twMerge(titleClassName, className)}>
      {children}
    </h2>
  )
}

export function Content({ children, className, ...props }: ContentProps) {
  const contentClassName = 'mt-12'

  if (typeof children === 'function') {
    return children({ contentClassName })
  }

  return (
    <div {...props} className={twMerge(contentClassName, className)}>
      {children}
    </div>
  )
}

Section.SubTitle = SubTitle
Section.Title = Title
Section.Content = Content
