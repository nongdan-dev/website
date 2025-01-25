import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { SkipToMainContent } from '@/components/widget'

import Footer from './Footer'
import Header from './Header'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className='text-body relative min-h-dvh'>
      <SkipToMainContent />
      <Header />
      <main
        id='main-content'
        className={twMerge(
          'grid-container',
          pathname !== '/' && 'pt-[--header_height]',
        )}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
