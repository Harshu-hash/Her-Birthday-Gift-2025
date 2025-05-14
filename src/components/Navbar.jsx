import React from 'react'
import './Navbar.css'
import logo from '/images/heartWithWings.png'
const Navbar = () => {
  return (
    <div className='navbar'>

          <div className="nav-container">
        
            <img className='logo' src={logo} alt="" />
        <div className="logo-heading">
          <h3>Neheart</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
