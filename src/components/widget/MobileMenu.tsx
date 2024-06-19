import { useEffect } from 'react'
import { GrMail } from 'react-icons/gr'
import { twMerge } from 'tailwind-merge'

import useLockScroll from '@/hooks/useLockScroll'

import { Button } from '../ui/Button'
import { Link } from '../ui/Link'

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

  return (
    <div
      aria-hidden={!visible}
      className={twMerge(
        'fixed inset-0 top-20 z-10 flex flex-col justify-between bg-white transition-transform duration-200 lg:hidden',
        !visible ? 'translate-x-full' : 'translate-x-0',
      )}
    >
      <div className='grid-container flex-1 pt-8'>
        <nav
          aria-label='mobile'
          className='col-content flex h-full flex-col justify-center'
        >
          <ul>
            <li>
              <Link
                to='/services'
                className='block py-4 text-center text-lg font-medium'
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/projects'
                className='block py-4 text-center text-lg font-medium'
                onClick={onClose}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to='/about-us'
                className='block py-4 text-center text-lg font-medium'
                onClick={onClose}
              >
                About us
              </Link>
            </li>
            <li>
              <span className='block py-4 text-center text-lg font-medium'>
                <Button asChild>
                  <Link to='/contact' defaultStyle onClick={onClose}>
                    Contact us
                  </Link>
                </Button>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className='grid-container py-4'>
        <div className='col-content'>
          <hr aria-hidden='true' className='my-4 border-b border-gray-200' />
          <div className='flex items-center justify-center gap-2 text-center text-body/60'>
            <GrMail aria-hidden='true' className='h-4 w-4 flex-shrink-0' />
            <a
              className='text-xs'
              href={`mailto:nongdan.dev@gmail.com`}
              aria-label={`email us at nongdan.dev@gmail.com`}
            >
              nongdan.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
