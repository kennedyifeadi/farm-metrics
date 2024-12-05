import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
    return (
        <motion.div 
            className="h-full w-full flex flex-col items-center gap-2"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <h1 className="text-3xl font-bold text-center mt-10">Page Not Found</h1>
            <button className="py-2 px-4 rounded-md text-white font-semibold w-max bg-[#901ee4]"><NavLink to='/'>Dashboard</NavLink></button>
            </motion.div>
      )
}

export default PageNotFound
