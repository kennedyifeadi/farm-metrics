import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes"


function App() {

  return (
      <BrowserRouter>
        <div className='w-full h-[110dvh] md:h-[100dvh] relative flex flex-col overflow-x-hidden'>
          <NavBar/>
          <AnimatedRoutes/>
        </div>
      </BrowserRouter>
  )
}

export default App
