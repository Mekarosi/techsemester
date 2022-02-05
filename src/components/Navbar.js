import React from 'react';
import { Link } from 'react-router-dom'
import logo5 from "../../src/img/logo5.JPG"
import icons from "../../src/img/icons.JPG"

const Navbar = () => {
  return (
    <div class="topnav">
   
    <input className='search' type="text" placeholder="Search.."/>
    
    <img src={icons} alt="logo" className='icons'/>
    <img src={logo5} alt="logo" className='logo'/>
    <Link to="/login">Log In</Link>
    <Link to="/register">Register</Link>
  </div>
  );
}

export default Navbar;
