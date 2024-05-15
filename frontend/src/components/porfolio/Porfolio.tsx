import React from 'react'

import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import About from '../about/About'
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';


const Porfolio: React.FC = () => {


  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <Nav />

          <div className="mt-16 flex-grow flex flex-col justify-center items-center  bg-orange-50 pb-10">
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Porfolio;