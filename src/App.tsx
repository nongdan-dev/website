import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layout'
import AboutUsPage from './pages/AboutUs'
import ContactPage from './pages/Contact'
import MobileDevelopment from './pages/Development/MobileDevelopment'
import WebDevelopment from './pages/Development/WebDevelopment'
import HomePage from './pages/Home'
import OurWorkPage from './pages/OurWork'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='contact-us' element={<ContactPage />} />
          <Route path='our-work' element={<OurWorkPage />} />
          <Route path='about-us' element={<AboutUsPage />} />
        </Route>
        <Route path='/development' element={<Layout />}>
          <Route path='web-development' element={<WebDevelopment />} />
          <Route path='mobile-development' element={<MobileDevelopment />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
