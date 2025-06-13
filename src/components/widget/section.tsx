"use client"
import { ComponentProps, ReactNode, useId, createContext, useContext, isValidElement, cloneElement } from 'react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { Chip, type ChipProps } from '@/components/ui'
import { useMediaQuery, useTailwind } from '@/hooks'

type SectionCtx = {
  titleId: string
  titleClassName: string
}

const SectionContext = createContext<SectionCtx | undefined>(undefined)

export type SectionProps = ComponentProps<'section'>

type SubTitleProps = ChipProps & {
  className?: string
}

type TitleProps = Omit<ComponentProps<'h2'>, 'children'> & {
  children: ((props: SectionCtx) => ReactNode) | ReactNode
  className?: string
  asChild?: boolean
}

type ContentProps = Omit<ComponentProps<'div'>, 'children'> & {
  children: ((props: { contentClassName: string }) => ReactNode) | ReactNode
  className?: string
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

export function SubTitle({ className, ...props }: SubTitleProps) {
  const { theme } = useTailwind()
  const isBelowMd = useMediaQuery(`(max-width: ${theme.screens.md})`)

  return (
    <Chip
      aria-hidden
      bordered
      size={isBelowMd ? 'small' : 'medium'}
      {...props}
      className={twMerge('mb-2.5', className)}
    />
  )
}

export function Title({ children, className, asChild, ...props }: TitleProps) {
  const context = useContext(SectionContext)
  
  if (!context) {
    throw new Error('Title must be used within a Section component')
  }
  
  const { titleId, titleClassName } = context

  if (typeof children === 'function') {
    return children({ titleId, titleClassName } as SectionCtx)
  }

  if (asChild && React.isValidElement<{ className?: string; id?: string }>(children)) {
    return React.cloneElement(children, {
      id: titleId,
      className: twMerge(titleClassName, className, children.props.className)
    } as React.HTMLAttributes<HTMLElement>)
  }

  return (
    <h2 {...props} id={titleId} className={twMerge(titleClassName, className)}>
      {children}
    </h2>
  )
}

export function Content({ children, className, ...props }: ContentProps) {
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


export default {
  Section,
  SubTitle,
  Title,
  Content,
}

