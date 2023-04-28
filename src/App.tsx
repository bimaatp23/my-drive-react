import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Index'
import Login from './components/login/Index'
import Profile from './components/profile/Index'

function App() {
  return <>
    <h1 className='text-2xl'>Hello World Tailwind CSS</h1>
    <ul>
      <li><a href="/">Dashboard</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/profile">Profile</a></li>
    </ul>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
