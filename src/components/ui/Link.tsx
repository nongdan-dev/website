import {
  LinkProps as RLinkProps,
  Link as RLink,
  useLocation,
} from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export type LinkProps = RLinkProps & {
  useDefaultStyle?: boolean
  useActiveStyle?: boolean
}

export function Link({
  useDefaultStyle,
  useActiveStyle,
  className,
  ...props
}: LinkProps) {
  const { pathname } = useLocation()

  return (
    <RLink
      {...props}
      className={twMerge(
        !useDefaultStyle &&
          'transition-colors hover:text-indigo-500 focus-visible:text-indigo-500',
        useActiveStyle && pathname === props.to && 'text-indigo-500',
        className,
      )}
    />
  )
}
