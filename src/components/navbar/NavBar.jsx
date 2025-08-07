import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li className='animate'>Home</li>
            <li className='animate'>About</li>
            <li className='animate'>Projects</li>
            <li className='animate'>Resume</li>
        </ul>
        <div className="nav-connect animate">Connect with me</div>
    </div>
  )
}

export default NavBar