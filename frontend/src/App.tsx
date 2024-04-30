import React from 'react'

import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
const App: React.FC = () => {


  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <Nav />

          <div className="mt-16 flex-grow flex flex-col justify-center items-center  bg-orange-50 pb-10">
            <About />
            <Experience />
            <Skills />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App


/*
<div>
      <Nav />   
    </div>
    <div>
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
    <div>
      <Footer />
    </div>
*/