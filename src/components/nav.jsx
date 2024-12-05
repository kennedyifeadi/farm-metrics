import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWater } from "react-icons/fa6";
import { RiMenu4Fill } from "react-icons/ri";
import { useOnClick } from "../hooks/OnClick"
import { useState } from "react";

export const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = useOnClick(() => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    })
  return (
    <div className="w-full h-[50px] bg-[#323232] px-4 flex justify-between relative ">
      <div className="flex gap-3 h-full items-center bg-[#323232]">
        <FaWater className="text-white text-2xl" />
        <h1 className="text-white font-bold text-[18px] md:text-[22px]">Farm <span className="text-[#901ee4]">Metrics</span></h1>
      </div>
      <div className="flex h-full items-center bg-[#323232]">
        <RiMenu4Fill className="text-white text-2xl md:hidden" onClick={handleClick} />
        <ul className={`flex gap-3 text-white flex-col md:flex-row md:h-full md:w-max md:items-center duration-500 ease-in-out md:relative absolute bg-[#323232] p-4 md:p-0 left-0 w-full md:z-10 md:top-0 ${isVisible ? "  top-[99%] h-max  " : "top-[-300%]"}`} >
            <li>
            <NavLink
                to="/"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ borderBottom: "none" }}
                    animate={{ borderBottom: isActive ? "2px solid #901ee4" : "none" }}
                    transition={{ duration: 0.3 }}
                    className="w-max"
                  >
                    <span className="block">Dashboard</span>
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
                    className="w-max"
                  >
                    <span className="block">Data Visualization</span>
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
                    className="w-max"
                  >
                    <span className="block">Ai Summary</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
        </ul>
      </div>
    </div>
  )
}

