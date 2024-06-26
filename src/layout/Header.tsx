import { Fragment, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button, Link, MobileMenu, Portal } from '@/components'

import logo from '../assets/logo.svg'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Fragment>
      <header className='fixed inset-x-0 top-0 z-10'>
        <div className='grid-container relative h-20 border-b border-gray-200 bg-white'>
          <div className='col-content flex flex-row items-center justify-between'>
            <Link
              to='/'
              className='self-center'
              aria-label='nongdan.dev homepage'
              onClick={() => setShowMenu(false)}
            >
              <img className='w-36' src={logo} alt='' aria-hidden='true' />
            </Link>
            <nav aria-label='main' className='hidden lg:block'>
              <ul className='flex h-full flex-row'>
                <li>
                  <Link
                    to='/services'
                    className='flex h-full items-center px-5'
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to='/projects'
                    className='flex h-full items-center px-5'
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about-us'
                    className='flex h-full items-center px-5'
                  >
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
              className='px-5 py-3 pr-0 lg:hidden'
              aria-label='toggle mobile menu'
              aria-expanded={showMenu}
              onClick={() => setShowMenu(prev => !prev)}
            >
              <svg
                viewBox='0 0 100 100'
                width={40}
                className='fill-body'
                aria-hidden='true'
              >
                <rect
                  width='80'
                  height='8'
                  x='10'
                  y={!showMenu ? 26 : 46}
                  rx='5'
                  className={twMerge(
                    'origin-center transition-all',
                    showMenu && 'rotate-45',
                  )}
                />
                <rect
                  width='80'
                  height='8'
                  x='10'
                  y='46'
                  rx='5'
                  className={twMerge(
                    'origin-center transition-all',
                    showMenu && 'opacity-0',
                  )}
                />
                <rect
                  width='80'
                  height='8'
                  x='10'
                  y={!showMenu ? 66 : 46}
                  rx='5'
                  rotate={45}
                  className={twMerge(
                    'origin-center transition-all',
                    showMenu && '-rotate-45',
                  )}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Portal>
        <MobileMenu visible={showMenu} onClose={() => setShowMenu(false)} />
      </Portal>
    </Fragment>
  )
}

export default Header
