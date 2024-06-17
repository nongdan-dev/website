import { throttle } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'

import { Button, Link } from '@/components'

const SCROLL_THRESHOLD = 80

function Header() {
  const [showBorder, setShowBorder] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = useCallback(
    throttle(() => {
      setShowBorder(window.scrollY >= SCROLL_THRESHOLD)
    }, 16),
    [],
  )

  return (
    <header
      className={twMerge(
        'fixed inset-x-0 top-0 z-10 h-20 border-b bg-white transition-colors',
        showBorder ? 'border-gray-300' : 'border-transparent',
      )}
    >
      <div className='grid-container h-full'>
        <div className='col-content flex flex-row justify-between'>
          <Link to='/' className='self-center'>
            Logo
          </Link>
          <nav aria-label='main' className='hidden lg:block'>
            <ul className='flex h-full flex-row'>
              <li>
                <Link to='/services' className='flex h-full items-center px-5'>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/work' className='flex h-full items-center px-5'>
                  Work
                </Link>
              </li>
              <li>
                <Link to='/about-us' className='flex h-full items-center px-5'>
                  About us
                </Link>
              </li>
              <li>
                <span className='flex h-full items-center pl-5'>
                  <Button asChild>
                    <Link to='/contact' defaultStyle>
                      Contact us
                    </Link>
                  </Button>
                </span>
              </li>
            </ul>
          </nav>
          <button
            className='px-5 py-3 lg:hidden'
            aria-label='toggle mobile menu'
            aria-expanded='false'
          >
            <RxHamburgerMenu className='text-3xl' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
