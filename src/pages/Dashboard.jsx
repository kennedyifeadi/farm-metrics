import { motion } from "framer-motion"
import { DashboardComp } from "../components/DashboardComp"
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TurbidityIcon } from "../icons/Turbidity"
import { TDSIcon } from "../icons/TDS"
import { TubidityChart } from "../components/TubidityChart"
import { TemperatureChart } from "../components/TemperatureChart"
import { HumidityChart }  from '../components/HumidityChart'



const Dashboard = () => {
    return (
        <motion.div 
            className="h-full w-full flex flex-col"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <div className="w-full p-4 h-full flex flex-wrap justify-between gap-y-4">
                    <DashboardComp title="Temperature" value="20°C" color="dark" status="Normal" icon={<FaTemperatureThreeQuarters />} text="Low (<20°C): Slows down fish metabolism and plant growth" chart={<TemperatureChart/>}/>
                    <DashboardComp title="Humidity" value="55%" color="dark" status="Soft" icon={<WiHumidity />} text="High (>70%): Excess humidity can lead to fungal growth and disease in plants or affect storage conditions for produce." chart={<HumidityChart/>}/>
                    <DashboardComp title="Turbidity" value="4NTU" color="dark" status="Soft" icon={<TurbidityIcon />} text="High (>5 NTU): Indicates excessive suspended particles, reducing light penetration and oxygen levels, potentially stressing fish or plants." chart={<TubidityChart/>} />
                    <DashboardComp title="TDS" value="200ppm" color="dark" status="Normal" icon={<TDSIcon />} text="Low (<300 ppm): Nutrients are insufficient; water may lack essential minerals for plant or fish health." />
                </div>
            </motion.div>
      )
}

export default Dashboard
