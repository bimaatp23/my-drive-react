import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/Index'
import Login from './components/login/Index'
import Profile from './components/profile/Index'
import Register from './components/register/Index'

function App() {
  useEffect(() => {
    document.title = 'My Drive'
  })
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
