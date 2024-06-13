import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className='text-body relative flex min-h-dvh flex-col bg-white'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
