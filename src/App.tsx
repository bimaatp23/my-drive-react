import { ReactElement, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Base from './components/base/Base'
import Dashboard from './components/dashboard/Dashboard'
import File from './components/file/File'
import Sharing from './components/file/Sharing'
import Trash from './components/file/Trash'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Register from './components/register/Register'

function App(): ReactElement {
  const isLogin: boolean = checkLogin()
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
            <Route 
              path='/file' 
              element={<Base 
                element={<File isLogin={isLogin} redirect={<RedirectToLogin isLogin={isLogin}/>}/>}
              />}
            />
            <Route 
              path='/sharing' 
              element={<Base 
                element={<Sharing isLogin={isLogin} redirect={<RedirectToLogin isLogin={isLogin}/>}/>}
              />}
            />
            <Route 
              path='/trash' 
              element={<Base 
                element={<Trash isLogin={isLogin} redirect={<RedirectToLogin isLogin={isLogin}/>}/>}
              />}
            />
          </Routes>
    </BrowserRouter>
  </>
}

function checkLogin() {
  if (sessionStorage.getItem('isLogin') === 'true') {
    return true
  } else {
    return false
  }
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
