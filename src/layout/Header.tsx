import * as Popover from '@radix-ui/react-popover'
import {
  Fragment,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  RefObject,
  useEffect,
} from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { Logo } from '@/components/svg'
import { Button, Link, Portal } from '@/components/ui'
import { MobileMenu } from '@/components/widget'

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

function DropdownMenu({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement>
}) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild aria-haspopup='menu'>
        <button className='group flex h-full items-center gap-1.5 px-5 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 data-[state=open]:text-indigo-500'>
          <span>Services</span>
          <FaAngleDown className='transition-transform group-data-[state=open]:-rotate-180' />
        </button>
      </Popover.Trigger>
      <Popover.Portal container={containerRef.current}>
        <Popover.Content
          sideOffset={16}
          className='z-10 grid grid-cols-3 gap-20 rounded-b-md bg-white px-10 py-8 shadow-lg data-[state=open]:animate-slideUpAndFade'
        >
          <nav aria-label='Development'>
            <span aria-hidden='true' className='font-semibold'>
              Development
            </span>
            <ul className='mt-3'>
              <li>
                <Link
                  to='/development/web-development'
                  className='inline-block py-1'
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to='/development/mobile-development'
                  className='inline-block py-1'
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Tooling Development
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  API Integration
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Strategy & Architecture
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Managed Services
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label='Design'>
            <span aria-hidden='true' className='font-semibold'>
              Design
            </span>
            <ul className='mt-3'>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  User Research
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  User Interface
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Experience Design
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Digital Product Design
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label='Other'>
            <span aria-hidden='true' className='font-semibold'>
              Other
            </span>
            <ul className='mt-3'>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to='/coming-soon' className='inline-block py-1'>
                  Events
                </Link>
              </li>
            </ul>
          </nav>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Fragment>
      <header ref={headerRef} className='fixed inset-x-0 top-0 z-20'>
        <div className='grid-container transition-color relative h-header'>
          <div className='col-content flex flex-row items-center justify-between'>
            <Link
              to='/'
              className='self-center'
              aria-label='nongdan.dev homepage'
              onClick={() => setShowMobileMenu(false)}
            >
              <Logo aria-hidden='true' className='h-full w-36' />
            </Link>
            <nav aria-label='main' className='hidden lg:block'>
              <ul className='flex h-full flex-row'>
                <li>
                  <DropdownMenu containerRef={headerRef} />
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
                    <Button asChild tone='dark'>
                      <Link to='/contact' useDefaultStyle>
                        Build with us
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
