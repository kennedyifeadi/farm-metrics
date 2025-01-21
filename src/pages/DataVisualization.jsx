import { motion } from "framer-motion"
import { DataVisualizationComp } from "../components/DataVisualizationCpm"
import { TdsChart } from "../components/TdsChart"

const DataVisualization = () => {
    return (
        <motion.div 
            className="h-full w-full pt-4 md:pt-0 pb-4 md:pb-0 flex flex-col bg-[#323232] justify-center gap-4 items-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <div className="w-[90%] md:w-[60%] bg-[#0a0a0a] h-[500px] md:h-[50%] rounded-xl flex flex-col items-center p-2 ">
                    <h1 className="text-white font-semibold text-[24px]">Water Conditions Overview</h1>
                    <span className="h-[80%] w-full">
                    <TdsChart/>
                    </span>
                </div>
                <div className="flex flex-col md:flex-row w-[90%] gap-4 md:w-[60%] justify-between  ">
                <DataVisualizationComp title="Clean Water" text="Details on areas with clean water conditions, including specific regions and data points."/>
                <DataVisualizationComp title="Polluted Water" text="Information on areas with polluted water conditions, highlighting critical zones and statistics."/>
                <DataVisualizationComp title="Unknown Conditions" text="Regions with unknown water conditions, providing a call to action for further investigation."/>
                </div>
        </motion.div>
      )
}

export default DataVisualization
