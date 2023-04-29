import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/Index'
import Login from './components/login/Index'
import Profile from './components/profile/Index'
import Register from './components/register/Index'
import Redirect from './Redirect'

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  useEffect(() => {
    document.title = 'My Drive'
  })
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Redirect/>}/>
      </Routes>
      {
        isLogin ?
          <div>
            <Routes>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </div>
          :
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>

      }
    </BrowserRouter>
  </>
}

export default App;
