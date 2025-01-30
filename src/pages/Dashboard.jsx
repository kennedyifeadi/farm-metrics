import { motion } from "framer-motion"
import { DashboardComp } from "../components/DashboardComp"
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TurbidityIcon } from "../icons/Turbidity"
import { TDSIcon } from "../icons/TDS"
import { TubidityChart } from "../components/TubidityChart"
import { TemperatureChart } from "../components/TemperatureChart"
import { HumidityChart }  from '../components/HumidityChart'
import { TdsChart } from "../components/TdsChart"



const Dashboard = () => {
    return (
        <motion.div 
            className="h-full w-full flex flex-col"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <div className="w-full p-4 h-full flex flex-wrap gap-y-4 gap-x-10">
                    <DashboardComp size={1} title="Temperature" value="20°C" color="dark" status="Normal" icon={<FaTemperatureThreeQuarters />} text="Low (<20°C): Slows down fish metabolism" chart={<TemperatureChart/>}/>
                    <DashboardComp size={1} title="Humidity" value="55%" color="dark" status="Soft" icon={<WiHumidity />} text="High (>70%): Excess humidity can lead to fungal growth and diseases in ponds which would affect production rate." chart={<HumidityChart/>}/>
                    <DashboardComp size={1} title="Turbidity" value="45%" color="dark" status="Soft" icon={<TurbidityIcon />} text="High (<5 NTU & > 250 NTU): Indicates excessive suspended particles, reducing light penetration and oxygen levels, potentially stressing fish" chart={<TubidityChart/>} />
                    <DashboardComp size={1} title="TDS" value="134ppm" color="dark" status="Normal" icon={<TDSIcon />} text="Low (>300 ppm): Water contains excessive feed and waste materials. " chart={<TdsChart/>}/>
                    <DashboardComp size={2} title="Alert" value="no alert yet" color="dark"/>
                </div>
            </motion.div>
      )
}

export default Dashboard
