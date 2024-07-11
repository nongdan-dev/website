import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layout'
import AboutUsPage from './pages/AboutUs'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import OurWorkPage from './pages/OurWork'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/work' element={<OurWorkPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
