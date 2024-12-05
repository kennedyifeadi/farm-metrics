import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes"


function App() {

  return (
      <BrowserRouter>
        <div className='w-full h-[100dvh] overflow-y-hidden'>
          <NavBar/>
          <AnimatedRoutes/>
        </div>
      </BrowserRouter>
  )
}

export default App
