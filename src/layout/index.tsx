import { Outlet } from 'react-router-dom'

import { SkipToMainContent } from '@/components'

import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className='relative min-h-dvh bg-white text-body'>
      <SkipToMainContent />
      <Header />
      <main id='main-content' className='grid-container pt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
