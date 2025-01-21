import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes"
import { useEffect } from "react"
// import { generateToken, messaging } from "./notification/firebase"
// import { onMessage } from "firebase/messaging"
// import toast, { Toaster } from 'react-hot-toast';


function App() {

  // useEffect(() => {
  //   generateToken();
  //   onMessage(messaging, (payload) => {
  //     console.log("Message received. ", payload);
  //     toast(payload.notification.body);
  //   });
  // }, [])

  return (
      <BrowserRouter>
        <div className='w-full h-max scroll-smooth md:pb-0 md:h-[100dvh] relative flex flex-col overflow-auto'>
          <NavBar/>
          <AnimatedRoutes/>
          {/* <Toaster /> */}
        </div>
      </BrowserRouter>
  )
}

export default App

// api key = AIzaSyCj1ncmk9Lw80FFrAgJpY5nFnqdQV3yGa0
// url = 

