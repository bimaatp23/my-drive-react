import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/Index'
import Login from './components/login/Index'
import Profile from './components/profile/Index'
import Register from './components/register/Index'
import Base from './components/base/Base'

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  useEffect(() => {
    document.title = 'My Drive'
  })
  return <>
    <BrowserRouter>
          <Routes>
            <Route 
              path='/login' 
              element={<Login isLogin={isLogin} redirect={<RedirectToHome isLogin={isLogin}/>}/>}
            />
            <Route 
              path='/register' 
              element={<Register isLogin={isLogin} redirect={<RedirectToHome isLogin={isLogin}/>}/>}
            />
          </Routes>
          <Routes>
            <Route 
              path='/' 
              element={<Base 
                element={<Dashboard isLogin={isLogin} redirect={<RedirectToLogin isLogin={isLogin}/>}/>}
              />}
            />
            <Route 
              path='/profile' 
              element={<Base 
                element={<Profile isLogin={isLogin} redirect={<RedirectToLogin isLogin={isLogin}/>}/>}
              />}
            />
          </Routes>
    </BrowserRouter>
  </>
}

interface Props {
  isLogin: boolean
}

function RedirectToLogin(props: Props): any {
  if (!props.isLogin) {
    return <Navigate replace to='/login'/>
  }
}

function RedirectToHome(props: Props): any {
  if (props.isLogin) {
    return <Navigate replace to='/'/>
  }
}

export default App;
