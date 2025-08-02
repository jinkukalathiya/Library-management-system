import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/forgotPassword'
import ChangePassword from './pages/auth/ChangePassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
