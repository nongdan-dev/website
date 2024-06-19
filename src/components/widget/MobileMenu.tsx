import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import useLockScroll from '@/hooks/useLockScroll'

export type MobileMenuProps = {
  visible: boolean
}

export function MobileMenu({ visible }: MobileMenuProps) {
  const lockScroll = useLockScroll()

  useEffect(() => {
    lockScroll[visible ? 'on' : 'off']()
  }, [visible])

  return (
    <div
      aria-hidden={!visible}
      className={twMerge(
        'fixed inset-0 top-20 z-10 bg-white transition-all duration-200 lg:hidden',
        !visible ? 'translate-x-full' : 'translate-x-0',
      )}
    >
      hi
    </div>
  )
}
