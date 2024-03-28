import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='Container'>
<nav>
    <Link to='/' >Home</Link>
    <Link to='/Products' >Products</Link>
    <Link to='/login'>login</Link>
    <Link to='/reg'>Sign in</Link>
    <Link to='/cart'>Cart</Link>
    
</nav>

    </div>
  )
}

export default Nav