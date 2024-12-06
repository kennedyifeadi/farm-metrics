import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes"
import { useEffect } from "react"
import { generateToken } from "./notification/firebase"


function App() {

  useEffect(() => {
    generateToken();
  })

  return (
      <BrowserRouter>
        <div className='w-full h-[110dvh] scroll-smooth pb-[5rem] md:pb-0 md:h-[100dvh] relative flex flex-col overflow-x-hidden'>
          <NavBar/>
          <AnimatedRoutes/>
        </div>
      </BrowserRouter>
  )
}

export default App
