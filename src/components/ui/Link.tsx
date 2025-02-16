import { LinkProps, Link as RLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export function Link({
  noHover,
  className,
  ...props
}: LinkProps & { noHover?: boolean }) {
  return (
    <RLink
      {...props}
      className={twMerge(
        !noHover &&
          'transition-colors hover:text-primary-500 focus-visible:text-primary-500',
        className,
      )}
    />
  )
}
