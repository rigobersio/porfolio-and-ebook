import { Routes, Route } from "react-router-dom"

import NavBar from "./component/navBar/navBar"
import { RenderEbook } from "./component/libro/renderEbook"

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
      </div>
    </>
  )
}

export default App
