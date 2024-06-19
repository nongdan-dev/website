import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import useLockScroll from '@/hooks/useLockScroll'

export type MobileMenuProps = {
  visible: boolean
  onClose: () => void
}

export function MobileMenu({ visible, onClose }: MobileMenuProps) {
  const lockScroll = useLockScroll()

  useEffect(() => {
    lockScroll[visible ? 'on' : 'off']()
  }, [visible])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

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
