import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Form/Login'
import Register from './Form/Register'
import Products from './Products'
import Nav from './Nav'
import Cart from './Cart'
const Homepage = () => {
  return (
    <>
    <Nav/>

    <Routes>
        
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </>
  )
}

export default Homepage