import { ComponentProps, ReactNode, useId, createContext } from 'react'
import { twMerge } from 'tailwind-merge'

import { Chip, ChipProps } from '@/components/ui'
import { useContext } from '@/hooks/useContext'

type SectionCtx = {
  titleId: string
  titleClassName: string
}

export type SectionProps = ComponentProps<'section'>
export type SubTitleProps = ChipProps

export type TitleProps = Omit<ComponentProps<'h2'>, 'chilren'> & {
  children: ReactNode | ((props: SectionCtx) => ReactNode)
}

export type ContentProps = Omit<ComponentProps<'div'>, 'chilren'> & {
  children: ReactNode | ((props: { contentClassName: string }) => ReactNode)
}

const SectionContext = createContext<SectionCtx | undefined>(undefined)

export function Section(props: SectionProps) {
  const titleId = useId()
  const titleClassName = 'text-title'

  return (
    <SectionContext.Provider value={{ titleId, titleClassName }}>
      <section {...props} />
    </SectionContext.Provider>
  )
}

export function SubTitle(props: SubTitleProps) {
  return (
    <Chip
      aria-hidden
      {...props}
      className={twMerge('mb-3.5', props.className)}
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
  const contentClassName = 'mb-12'

  if (typeof children === 'function') {
    return children({ contentClassName })
  }

  return (
    <div {...props} className={twMerge('mb-12', className)}>
      {children}
    </div>
  )
}

Section.SubTitle = SubTitle
Section.Title = Title
Section.Content = Content
