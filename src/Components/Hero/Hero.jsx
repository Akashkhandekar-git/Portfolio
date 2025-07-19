import React from 'react';
import "./Hero.css";
import logo from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={logo} alt="logo" />
         <h1><span>I'm Akash,</span> Frontend Developer based in india</h1>
         <p>I am a frontend developer from Hyderabad with hands on exeperience in frontend development </p>
         <div className='hero_action'>
            <div className="hero_connect">Connect with me</div>
            <div className='hero_resume'>My resume</div>
         </div>

        
        </div>
    
    
    </>
  )
}

export default Hero