import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Main from './components/Mainn'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import Auras from './components/Auras'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/gela' element={<Main />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/auras' element={<Auras />}></Route>
      </Routes>
    </div>
  )
}
