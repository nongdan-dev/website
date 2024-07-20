import { throttle } from 'lodash'
import {
  Fragment,
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

import { Logo } from '@/components/svg'
import { Button, Link, Portal } from '@/components/ui'
import { MobileMenu } from '@/components/widget'

const SCROLL_THRESHOLD = 80

function MobileMenuTrigger({
  visible,
  setVisible,
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <button
      className='px-5 py-3 pr-0 lg:hidden'
      aria-label='toggle mobile menu'
      aria-expanded={visible}
      onClick={() => setVisible(prev => !prev)}
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
          y={!visible ? 26 : 46}
          rx='5'
          className={twMerge(
            'origin-center transition-all',
            visible && 'rotate-45',
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
            visible && 'opacity-0',
          )}
        />
        <rect
          width='80'
          height='8'
          x='10'
          y={!visible ? 66 : 46}
          rx='5'
          rotate={45}
          className={twMerge(
            'origin-center transition-all',
            visible && '-rotate-45',
          )}
        />
      </svg>
    </button>
  )
}

function Header() {
  const [showBorder, setShowBorder] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
    <Fragment>
      <header className='fixed inset-x-0 top-0 z-10'>
        <div
          className={twMerge(
            'grid-container transition-color relative h-20 border-b bg-white',
            showBorder ? 'border-gray-300' : 'border-transparent',
          )}
        >
          <div className='col-content flex flex-row items-center justify-between'>
            <Link
              to='/'
              className='self-center'
              aria-label='nongdan.dev homepage'
              onClick={() => setShowMobileMenu(false)}
            >
              <Logo
                aria-hidden='true'
                className='h-full w-36 text-indigo-500'
              />
            </Link>
            <nav aria-label='main' className='hidden lg:block'>
              <ul className='flex h-full flex-row'>
                <li>
                  <button className='flex h-full items-center gap-1.5 px-5 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500'>
                    <span>Services</span>
                    <FaAngleDown />
                  </button>
                </li>
                <li>
                  <Link
                    to='/work'
                    useActiveStyle
                    className='flex h-full items-center px-5'
                  >
                    Our work
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about-us'
                    useActiveStyle
                    className='flex h-full items-center px-5'
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <span className='flex h-full items-center pl-5'>
                    <Button asChild>
                      <Link to='/contact' useDefaultStyle>
                        Contact us
                      </Link>
                    </Button>
                  </span>
                </li>
              </ul>
            </nav>
            <MobileMenuTrigger
              visible={showMobileMenu}
              setVisible={setShowMobileMenu}
            />
          </div>
        </div>
      </header>
      <Portal>
        <MobileMenu
          visible={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
        />
      </Portal>
    </Fragment>
  )
}

export default Header
