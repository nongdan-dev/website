import { LinkProps as RLinkProps, Link as RLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export type LinkProps = RLinkProps & {
  defaultStyle?: boolean
}

export function Link({ defaultStyle, className, ...props }: LinkProps) {
  return (
    <RLink
      {...props}
      className={twMerge(
        !defaultStyle && 'transition-colors hover:text-indigo-500',
        className,
      )}
    />
  )
}
