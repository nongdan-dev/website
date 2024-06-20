import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layout'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
