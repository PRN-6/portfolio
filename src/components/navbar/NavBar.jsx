import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'

const NavBar = () => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpenState(false)
  }

  const items = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'work' },
    { label: 'Resume', id: 'contact' },
  ]

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      <img
        src={menuOpenState ? menuClose : menuOpen}
        alt="menu"
        className="menu-toggle"
        onClick={() => setMenuOpenState((s) => !s)}
      />
      <ul className={`nav-menu ${menuOpenState ? 'open' : ''}`}>
        {items.map((item) => (
          <li key={item.id} className='animate' onClick={() => scrollTo(item.id)}>
            {item.label}
          </li>
        ))}
      </ul>
      <div className="nav-connect animate" onClick={() => scrollTo('contact')}>
        Connect with me
      </div>
    </div>
  )
}

export default NavBar
