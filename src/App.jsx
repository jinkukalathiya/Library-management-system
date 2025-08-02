import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import ForgotPassword from './pages/auth/forgotPassword'
import ChangePassword from './pages/auth/ChangPassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
