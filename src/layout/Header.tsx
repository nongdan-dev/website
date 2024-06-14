import { throttle } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components'

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
          <nav aria-label='main'>
            <ul className='flex h-full flex-row'>
              <li>
                <Link
                  to='/services'
                  className='flex h-full items-center px-5 transition-colors hover:text-indigo-500'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/work'
                  className='flex h-full items-center px-5 transition-colors hover:text-indigo-500'
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to='/about-us'
                  className='flex h-full items-center px-5 transition-colors hover:text-indigo-500'
                >
                  About us
                </Link>
              </li>
              <li>
                <span className='flex h-full items-center pl-5'>
                  <Button asChild>
                    <Link to='/contact'>Build with us</Link>
                  </Button>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
