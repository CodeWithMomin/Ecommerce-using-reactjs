import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Form/Login'
import Register from './Form/Register'
import Products from './Products'
const Homepage = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
    </Routes>
    
    </>
  )
}

export default Homepage