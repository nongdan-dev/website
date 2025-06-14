'use client'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type CustomLinkProps = {
  noHover?: boolean
  activeClassName?: string
  exact?: boolean
  children: React.ReactNode
} & NextLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>

export function Link({
  noHover,
  className,
  activeClassName = 'text-primary-500',
  exact = false,
  href,
  ...props
}: CustomLinkProps) {
  const pathname = usePathname()
  const isActive = exact
    ? pathname === href
    : typeof href === 'string'
      ? pathname.startsWith(href)
      : pathname === href?.pathname

  return (
    <NextLink
      href={href}
      className={twMerge(
        !noHover &&
          'transition-colors hover:text-primary-500 focus-visible:text-primary-500',
        isActive && activeClassName,
        className,
      )}
      {...props}
    />
  )
}
