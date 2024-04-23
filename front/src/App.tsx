import { Routes, Route } from "react-router-dom"

import NavBar from "./component/navBar/navBar"
import { RenderEbook } from "./component/libro/renderEbook"
import Home from "./component/home/home"
import Footer from "./component/footer/footer"



function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/book" element={<RenderEbook />} />
          <Route path="/contact" />
        </Routes>
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
