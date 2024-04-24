import { Routes, Route } from "react-router-dom"

import { RenderEbook } from "./component/libro/renderEbook"
import Home from "./component/home/home"
import Footer from "./component/footer/footer"
import Nav from "./components/nav/Nav"



function App() {
  
  return (
    <>
    <div className="bg-stale-900">
      <Nav />
    </div>
    </>
  )
}

export default App

/*
 <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/book" element={<RenderEbook />} />
          <Route path="/contact" />
        </Routes>
        <Home />


*/