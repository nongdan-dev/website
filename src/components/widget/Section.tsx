import { ComponentProps, ReactNode, useId, createContext } from 'react'
import { twMerge } from 'tailwind-merge'

import { Chip, ChipProps } from '@/components/ui'
import { useContext, useMediaQuery, useTailwind } from '@/hooks'

type SectionCtx = {
  titleId: string
  titleClassName: string
}

const SectionContext = createContext<SectionCtx | undefined>(undefined)

export type SectionProps = ComponentProps<'section'>
type SubTitleProps = ChipProps

type TitleProps = Omit<ComponentProps<'h2'>, 'children'> & {
  children: ((props: SectionCtx) => ReactNode) | ReactNode
}

type ContentProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: ((props: { contentClassName: string }) => ReactNode) | ReactNode
}

export function Section({ className, ...props }: SectionProps) {
  const titleId = useId()
  const titleClassName = 'text-title w-full lg:w-3/4 xl:w-1/2'

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

function SubTitle(props: SubTitleProps) {
  const { theme } = useTailwind()
  const isBelowMd = useMediaQuery(`(width < ${theme.screens.md})`)

  return (
    <Chip
      aria-hidden
      bordered
      size={isBelowMd ? 'small' : 'medium'}
      {...props}
      className={twMerge('mb-2.5', props.className)}
    />
  )
}

function Title({ children, className, ...props }: TitleProps) {
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

function Content({ children, className, ...props }: ContentProps) {
  const contentClassName = 'mt-10 md:mt-14'

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
