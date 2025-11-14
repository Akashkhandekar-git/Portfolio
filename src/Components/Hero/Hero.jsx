import React from 'react';
import "./Hero.css";
import logo from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={logo} alt="logo" />
         <h1><span>I'm Akash,</span> Fullstack Developer based in india</h1>
         <p>I am from Hyderabad with hands on exeperience in 
          <br />
         Full Stack Development </p>
         <div className='hero_action'>
            <AnchorLink className='Anchor_Link' href="#contact" ><div className="hero_connect">Connect with me</div></AnchorLink>
            <div className='hero_resume'>My resume</div>
         </div>

        
        </div>
    
    
    </>
  )
}

export default Hero