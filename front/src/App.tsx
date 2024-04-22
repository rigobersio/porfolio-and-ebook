import { Button } from "@mui/material"
import { Routes, Route } from "react-router-dom"

import DrawerAppBar from "./component/navBar/drawerAppBar.component"
function App() {

  return (
    <>
      <div>
      <DrawerAppBar />
      <Button>Hola</Button>
      </div>
    </>
  )
}

export default App
