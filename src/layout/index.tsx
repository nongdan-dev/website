import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className='relative flex min-h-dvh flex-col bg-white text-body'>
      <Header />
      <main className='mt-20 flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
