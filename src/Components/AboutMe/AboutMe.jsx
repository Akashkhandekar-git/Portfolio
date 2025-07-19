import React from 'react'
import "./AboutMe.css";
import profilePic from "../../assets/about_profile.svg";

const AboutMe = () => {
  return (
    <>
    <div className='title'> <h1>About Me </h1> </div>
      <div className="container">
        <div>
            <img  src={profilePic} alt="profilePic" />
        </div>
        <div>
            <div className="content">
                <p>I am an experienced Frontend Developer with over the decade of professional experties in the field.
                    Throughout my career, I have had the privilage of collaborating with the prestigious organization, contributing to their success and growth.
                </p>
                <p> My passion for Frontend Development is not only refelected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>

            </div>
            <div className='skill_set'>
                <div className='skills'><p>React</p> <hr /></div>
                <div className='skills'><p>Javascript</p> <hr /></div>
                <div className='skills'><p>HTML</p> <hr /></div>
                <div className='skills'><p>CSS</p> <hr /></div>

            </div>

        </div>
      </div>
      <div className='details'>

         <div className='details_skills'><p><span className='highlights'>5+</span>   </p>  <p>YEARS OF EXPERIENCE</p>
         </div>
         <hr />
         
         <div className='details_skills'><p> <span className='highlights'>15+</span> </p> <p>PROJECTS COMPLETED</p></div>
         
         <hr />
         <div className='details_skills'><p><span className='highlights'>25+</span> </p> <p>HAPPY CLIENTS</p> </div>
         
         

      </div>
    
    </>
  )
}

export default AboutMe;