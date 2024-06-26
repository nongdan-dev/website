import {
  ComponentProps,
  Children,
  cloneElement,
  ReactElement,
  CSSProperties,
} from 'react'
import { twMerge } from 'tailwind-merge'

export type MarqueeProps = ComponentProps<'ul'> & {
  direction?: 'left' | 'right'
  duration?: number
  gap?: number
}

export type MarqueeItemProps = ComponentProps<'li'> & {
  __cloned?: true
}

export function Marquee({
  direction = 'left',
  duration,
  gap = 24,
  className,
  children,
  ...props
}: MarqueeProps) {
  const cssVariables = {
    '--gap': `${gap}px`,
    '--duration': `${duration || Children.count(children) * 15}s`,
    '--direction': direction === 'left' ? 'forwards' : 'reverse',
  } as CSSProperties

  return (
    <div className='marquee overflow-hidden py-1' style={cssVariables}>
      <ul
        {...props}
        className={twMerge(
          `flex w-max flex-nowrap gap-[var(--gap)]`,
          className,
        )}
      >
        {children}
        {Children.map(children, child =>
          cloneElement(child as ReactElement, {
            __cloned: true,
          }),
        )}
      </ul>
    </div>
  )
}

export function MarqueeItem({
  __cloned,
  className,
  children,
}: MarqueeItemProps) {
  return (
    <li aria-hidden={__cloned} className={twMerge('flex-shrink-0', className)}>
      {children}
    </li>
  )
}

Marquee.Item = MarqueeItem
