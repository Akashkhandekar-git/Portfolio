import React from 'react'
import "./Navbar.css";
import logo from "../../assets/Akash_logo.png";

const Navbar = () => {
  return (
    <>
       <div className='navbar'>
           <img className="logo" src={logo} alt="" />

           <ul>
             <li>Home</li>
             <li>About Me</li>
             <li>Services</li>
             <li>Portfolio</li>
             <li>Contact</li>
           </ul>

           <div className='nav_connect'>Connect with me</div>

       </div>
     </>
  )
}

export default Navbar