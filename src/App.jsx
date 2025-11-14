import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe.jsx'
import Services from './Components/Services/Services.jsx'
import MyWork from './Components/MyWork/MyWork.jsx'
import Contact from './Components/Contact/Contact.jsx'

const App = () => {
  return (
    <>
       <Navbar />
       <Hero />
       <AboutMe />
       <Services />
       <MyWork />
       <Contact />
     </>
  )
}

export default App;