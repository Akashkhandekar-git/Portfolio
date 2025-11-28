import React from 'react'
import "./AboutMe.css";
import profilePic from "../../assets/Akash.png";

import theme_pattern from "../../assets/theme_pattern.svg";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaJava, FaAws, FaAngular, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiJavascript, SiTypescript, SiRedux, SiTailwindcss,
  SiNextdotjs, SiPostgresql, SiFirebase, SiVercel, SiDocker, SiGitlab
} from "react-icons/si";



const AboutMe = () => {
  return (
    <>
      <div id="about" className='title'>
        <h1>About Me </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="container">
        <div>
          <img  src={profilePic} alt="profilePic" />
        </div>
        <div>
          <div className="content">
            <p>I am a FullStack Developer with over the 3+ Years of Development experties in the field.
              Throughout my career, I have had the privilage of collaborating with the prestigious organization and multiple project, contributing to their success and growth.
            </p>
            <p> My passion for FullStack Development is not only refelected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>

          </div>
          <div className="skills">
            <h2 className='techSkill'>My Tech Skills</h2>
            <div className="Skills">

              <div className='skill_sets'><FaReact className='react' /><p>React</p></div>
              <div className='skill_sets' > <FaNodeJs className='node ' /> <p>Node.js</p></div>
              <div className='skill_sets'> <SiMongodb className='mongo' /> <p>MongoDB</p></div>
              <div className='skill_sets'> <SiExpress className='express' /> <p>Express</p></div>
              <div className='skill_sets'> <FaAngular className='angular' /><p>Angular</p></div>
              <div className='skill_sets'>  <SiJavascript className='javascript' /><p>Javascript</p></div>
              <div className='skill_sets'>  <SiRedux className='redux my-2 mx-3' /><p>Redux</p></div>
              <div className='skill_sets'>  <SiTypescript className="typescript" /><p>Typescript</p></div>



            </div>
          </div>

        </div>
      </div>
      <div className='details'>

        <div className='details_skills'><p><span className='highlights'>3+</span>   </p>  <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />

        <div className='details_skills'><p> <span className='highlights'>10+</span> </p> <p>PROJECTS COMPLETED</p></div>

        <hr />
        <div className='details_skills'><p><span className='highlights'>15+</span> </p> <p>HAPPY CLIENTS</p> </div>



      </div>

    </>
  )
}

export default AboutMe;