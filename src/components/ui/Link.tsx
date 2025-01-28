import { LinkProps, Link as RLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export function Link({ className, ...props }: LinkProps) {
  return (
    <RLink
      {...props}
      className={twMerge(
        'transition-colors hover:text-primary-500 focus-visible:text-primary-500',
        className,
      )}
    />
  )
}
