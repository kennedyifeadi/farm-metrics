import { motion } from "framer-motion"
import { DashboardComp } from "../components/DashboardComp"
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";



const Dashboard = () => {
    return (
        <motion.div 
            className="h-full w-full flex flex-col"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <div className="w-full p-4 h-full flex flex-wrap justify-between gap-y-4">
                    <DashboardComp title="Temperature" value="200C" color="dark" status="normal" icon={<FaTemperatureHigh />} text="temperature is good" />
                    <DashboardComp title="Humidity" value="200C" color="dark" status="soft" icon={<WiHumidity />} text="temperature is good" />
                    <DashboardComp title="Turbidity" value="200C" color="dark" status="soft" icon={<FaTemperatureHigh />} text="temperature is good" />
                    <DashboardComp title="TDS" value="200C" color="dark" status="normal" icon={<FaTemperatureHigh />} text="temperature is good" />
                </div>
            </motion.div>
      )
}

export default Dashboard
