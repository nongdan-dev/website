"use client"

import { MouseEventHandler, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import { useLockScroll } from '@/hooks'

import { Button } from '../ui'
import Link from 'next/link'

export type MobileMenuProps = {
  visible: boolean
  onClose: () => void
}

export function MobileMenu({ visible, onClose }: MobileMenuProps) {
  const lockScroll = useLockScroll()

  useEffect(() => {
    if (visible) {
      lockScroll.on()
      window.addEventListener('keydown', handleKeyDown)
    } else {
      lockScroll.off()
      window.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      lockScroll.off()
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [visible])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleScrollToSection: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    document
      .querySelector('#footer-nav')
      ?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  return (
    <div
      aria-hidden={!visible}
      className={twMerge(
        'fixed inset-0 top-20 z-10 flex flex-col justify-between bg-white/95 backdrop-blur-md transition-transform duration-200 lg:hidden',
        !visible ? 'translate-x-full' : 'translate-x-0',
      )}
    >
      <div className='content-grid flex-1 pt-8'>
        <nav
          aria-label='mobile'
          className='col-content flex h-full flex-col justify-center'
        >
          <ul>
            <li>
              <Link
                href='#services'
                className='block py-4 text-center text-lg font-medium'
                onClick={handleScrollToSection}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href='/our-work'
                className='block py-4 text-center text-lg font-medium'
                onClick={onClose}
              >
                Our work
              </Link>
            </li>
            <li>
              <Link
                href='/about-us'
                className='block py-4 text-center text-lg font-medium'
                onClick={onClose}
              >
                About us
              </Link>
            </li>
            <li>
              <span className='block py-4 text-center text-lg font-medium'>
                <Button asChild>
                  <Link href='/contact-us' onClick={onClose}>
                    Contact us
                  </Link>
                </Button>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
