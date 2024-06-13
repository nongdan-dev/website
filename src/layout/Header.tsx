import { throttle } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const SCROLL_THRESHOLD = 200

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
      <div className='mx-auto flex h-full max-w-1440 flex-row justify-between px-4'>
        <Link to='/' className='self-center'>
          Logo
        </Link>
        <nav aria-label='main'>
          <ul className='flex h-full flex-row'>
            <li>
              <Link
                to='/services'
                className='flex h-full items-center px-5 font-medium transition-colors hover:text-indigo-500'
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/work'
                className='flex h-full items-center px-5 font-medium transition-colors hover:text-indigo-500'
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to='/about-us'
                className='flex h-full items-center px-5 font-medium transition-colors hover:text-indigo-500'
              >
                About us
              </Link>
            </li>
            <li>
              <span className='flex h-full items-center pl-5'>
                <Link
                  to='/contact'
                  className='block rounded-md bg-indigo-500 px-6 py-2 font-medium text-white'
                >
                  Build with us
                </Link>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
