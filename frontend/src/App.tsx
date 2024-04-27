import React from 'react'

import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

 const App: React.FC = () => {
  

  return (
    <>
    <div>
      <Nav />
      
    </div>
    
    <div className="bg-black">
      <Footer />
    </div>
    
    </>
  )
}

export default App
