import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className='relative min-h-dvh bg-white text-body'>
      <Header />
      <main id='main-content' className='grid-container pt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
