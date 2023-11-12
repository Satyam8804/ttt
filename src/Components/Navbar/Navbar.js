import React from 'react'
import logo from '../../images/TTT.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span className='topic'>Stories</span>
        </div>
        <input type="button" value="Courses" />
    </div>
  )
}

export default Navbar