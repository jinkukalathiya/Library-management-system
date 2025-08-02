import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import Register from './pages/auth/RegisterPage'
import ForgotPassword from './pages/auth/forgotPassword'
import ChangePassword from './pages/auth/ChangePassword'
import DashboardPage from './pages/dashboard/dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage/>}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/change-password' element={<ChangePassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
