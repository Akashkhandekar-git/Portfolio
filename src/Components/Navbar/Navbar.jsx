import React from 'react'
import "./Navbar.css";
import logo from "../../assets/Akash_logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  return (
    <>
       <div className='navbar'>
           <img className="logo" src={logo} alt="" />

           <ul>
             <AnchorLink className='Anchor_Link' href="#home"><li className='Anchor_Link'>Home</li></AnchorLink>
             <AnchorLink className='Anchor_Link' href="#about"><li>About Me</li></AnchorLink>
             <AnchorLink className='Anchor_Link' href="#services"><li>Services</li></AnchorLink>
             <AnchorLink className='Anchor_Link' href="#mywork"><li>My Work</li></AnchorLink>
             <AnchorLink className='Anchor_Link' href="#contact"><li>Contact</li></AnchorLink>
           </ul>

           <AnchorLink className='Anchor_Link' href="#contact" ><button className='nav_connect'>Connect with me</button> </AnchorLink> 

       </div>
     </>
  )
}

export default Navbar