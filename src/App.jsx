import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' />
        </Routes>
      </BrowserRouter>
      <h1>Helloooooo</h1>
    </>
  )
}

export default App
