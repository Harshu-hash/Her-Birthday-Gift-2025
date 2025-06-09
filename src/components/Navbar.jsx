import React from 'react'
import './Navbar.css'
import logo from '/images/heartWithWings.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  
    const handleClick = () => {
      navigate('/')
    }
  return (
    <div className="navbar">
      <div className="nav-container">
        <img className="logo" src={logo} alt="" onClick={handleClick} />
        <div onClick={handleClick} className="logo-heading">
          <h3>Neheart</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar
