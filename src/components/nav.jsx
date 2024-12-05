import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWater } from "react-icons/fa6";
import { RiMenu4Fill } from "react-icons/ri";



export const NavBar = () => {
  return (
    <div className="w-full h-[50px] bg-[#323232] px-4 flex justify-between">
      <div className="flex gap-3 h-full items-center">
        <FaWater className="text-white text-2xl" />
        <h1 className="text-white font-bold text-[22px]">Farm <span className="text-[#901ee4]">Metrics</span></h1>
      </div>
      <div className="flex h-full">
        <RiMenu4Fill className="text-white text-2xl md:hidden" onClick={handleClick}/>
        <ul className="flex gap-3 text-white h-full items-center">
            <li>
            <NavLink
                to="/"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ borderBottom: "none" }}
                    animate={{ borderBottom: isActive ? "2px solid #901ee4" : "none" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="hidden md:block">Dashboard</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/datavisualization"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ borderBottom: "none" }}
                    animate={{ borderBottom: isActive ? "2px solid #901ee4" : "none" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="hidden md:block">Data Visualization</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/aisummary"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ borderBottom: "none" }}
                    animate={{ borderBottom: isActive ? "2px solid #901ee4" : "none" }}
                    transition={{ duration: 0.1 }}
                  >
                    <span className="hidden md:block">Ai Summary</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
        </ul>
      </div>
    </div>
  )
}

