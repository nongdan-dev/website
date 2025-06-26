'use client'

import { throttle } from 'lodash'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment, useState, useRef, useEffect, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

import Logo from '@/assets/svg/logo.svg'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button, Link, Portal } from '@/components/ui'
import {
  MobileMenu,
  DropdownMenu,
  MobileMenuTrigger,
} from '@/components/widget'
import { useTailwind } from '@/hooks'
import { remToPx } from '@/utils/style'

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
              href='/development/web-development'
              className='inline-block py-1'
            >
              Web Development
            </Link>
          </li>
          <li>
            <Link
              href='/development/mobile-development'
              className='inline-block py-1'
            >
              Mobile Development
            </Link>
          </li>
          <li>
            <span className='inline-block cursor-default py-1 text-gray-400'>
              Tooling Development
            </span>
          </li>
          <li>
            <span className='inline-block cursor-default py-1 text-gray-400'>
              API Integration
            </span>
          </li>
        </ul>
      </nav>
      <nav aria-label='Design'>
        <span aria-hidden='true' className='font-semibold'>
          Design
        </span>
        <ul className='mt-3'>
          <li>
            <span className='inline-block cursor-default py-1 text-gray-400'>
              User Interface
            </span>
          </li>
          <li>
            <span className='inline-block cursor-default py-1 text-gray-400'>
              User Experience
            </span>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

function Header() {
  const t = useTranslations('Header')
  const { theme } = useTailwind()
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [dropdownActive, setDropdownActive] = useState(false)
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      return setScrollActive(true)
    }
    toggleScrollActive()
    window.addEventListener('scroll', throttleToggleScrollActive)
    return () =>
      window.removeEventListener('scroll', throttleToggleScrollActive)
  }, [pathname])

  useEffect(() => {
    const headerHeight = theme?.height?.header || '5rem'
    if (pathname === '/' && window.scrollY < remToPx(headerHeight)) {
      setScrollActive(showMobileMenu)
    }
  }, [pathname, showMobileMenu, theme?.height?.header])

  const toggleScrollActive = () => {
    const headerHeight = theme?.height?.header || '5rem'
    setScrollActive(window.scrollY >= remToPx(headerHeight))
  }

  const throttleToggleScrollActive = useCallback(
    throttle(toggleScrollActive, 100),
    [],
  )

  const activeHeaderStyle = dropdownActive || scrollActive

  return (
    <Fragment>
      <header ref={headerRef} className='fixed inset-x-0 top-0 z-50'>
        <div
          className={twMerge(
            'content-grid relative h-header transition-colors',
            activeHeaderStyle &&
              'bg-white/95 shadow-sm shadow-black/10 backdrop-blur-md',
          )}
        >
          <div className='col-content flex flex-row items-center justify-between'>
            <Link
              href='/'
              className='self-center'
              aria-label='nongdan.dev homepage'
              onClick={() => setShowMobileMenu(false)}
            >
              <Image src={Logo} alt='' className='w-32 md:w-36' />
            </Link>
            <nav aria-label='main' className='hidden lg:block'>
              <ul className='flex h-full flex-row gap-6'>
                <li>
                  <DropdownMenu onOpenChange={setDropdownActive}>
                    <DropdownMenu.Trigger aria-haspopup='menu'>
                      {t('services')}
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content containerRef={headerRef}>
                      <ServicesMenuContent />
                    </DropdownMenu.Content>
                  </DropdownMenu>
                </li>
                <li>
                  <Link href='/our-work' className='flex h-full items-center'>
                    {t('ourWork')}
                  </Link>
                </li>
                <li>
                  <Link href='/about-us' className='flex h-full items-center'>
                    {t('aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link href='/blog' className='flex h-full items-center'>
                    {t('blog')}
                  </Link>
                </li>
                <li className='ml-2'>
                  <span className='flex h-full items-center'>
                    <Button asChild>
                      <Link href='/contact-us'>{t('contact')}</Link>
                    </Button>
                  </span>
                </li>
                <li>
                  <LanguageSwitcher />
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
