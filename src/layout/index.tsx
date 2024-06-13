import { Outlet } from 'react-router-dom'

import { SkipToMainContent } from '@/components'

import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className='relative flex min-h-dvh flex-col bg-white text-body'>
      <SkipToMainContent />
      <Header />
      <main id='main-content' className='flex-1 pt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
