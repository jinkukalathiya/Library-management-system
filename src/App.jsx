import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import ForgotPassword from './pages/auth/forgotPassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
