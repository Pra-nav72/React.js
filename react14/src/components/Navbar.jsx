import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav style={{display: 'flex', backgroundColor: 'blueviolet', justifyContent: 'space-around', color: 'white', padding: '14px 350px', margin: '15px 0'}}>
        <NavLink to="/" className={'link'}>Home</NavLink>
        <NavLink to="/about" className={'link'}>About</NavLink>
        <NavLink to="/contacts" className={'link'}>Contacts</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
