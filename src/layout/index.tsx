import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='text-body relative flex min-h-dvh flex-col bg-white'>
      <header>header</header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
