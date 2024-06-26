import { ComponentProps, Children, cloneElement, ReactElement } from 'react'
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
  gap = 24,
  className,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div className='relative overflow-x-clip'>
      <ul
        {...props}
        className={twMerge(`flex w-max flex-nowrap`, className)}
        style={{ ...props.style, gap }}
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
