import { Fragment, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import Logo from '@/assets/svg/logo.svg'
import { Button, Portal } from '@/components/ui'
import {
  MobileMenu,
  DropdownMenu,
  MobileMenuTrigger,
} from '@/components/widget'

function ServicesMenuContent() {
  return (
    <Fragment>
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
        </ul>
      </nav>
      <nav aria-label='Design'>
        <span aria-hidden='true' className='font-semibold'>
          Design
        </span>
        <ul className='mt-3'>
          <li>
            <Link to='/coming-soon' className='inline-block py-1'>
              User Interface
            </Link>
          </li>
          <li>
            <Link to='/coming-soon' className='inline-block py-1'>
              User Experience
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [dropdownActive, setDropdownActive] = useState(false)

  const activeHeaderStyle = dropdownActive

  return (
    <Fragment>
      <header ref={headerRef} className='fixed inset-x-0 top-0 z-50'>
        <div
          className={twMerge(
            'content-grid relative h-header transition-colors',
            activeHeaderStyle && 'bg-white/85 shadow-sm backdrop-blur-md',
          )}
        >
          <div className='col-content flex flex-row items-center justify-between'>
            <Link
              to='/'
              className='self-center'
              aria-label='nongdan.dev homepage'
              onClick={() => setShowMobileMenu(false)}
            >
              <img src={Logo} alt='' className='w-36' />
            </Link>
            <nav aria-label='main' className='hidden lg:block'>
              <ul className='flex h-full flex-row gap-6'>
                <li>
                  <DropdownMenu onOpenChange={setDropdownActive}>
                    <DropdownMenu.Trigger aria-haspopup='menu'>
                      Services
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content containerRef={headerRef}>
                      <ServicesMenuContent />
                    </DropdownMenu.Content>
                  </DropdownMenu>
                </li>
                <li>
                  <Link to='/work' className='flex h-full items-center'>
                    Our work
                  </Link>
                </li>
                <li>
                  <Link to='/about-us' className='flex h-full items-center'>
                    About us
                  </Link>
                </li>
                <li className='ml-2'>
                  <span className='flex h-full items-center'>
                    <Button asChild>
                      <Link to='/contact'>Build with us</Link>
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
