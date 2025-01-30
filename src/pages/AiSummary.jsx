import { motion } from "framer-motion"
import { AiSummaryComp } from "../components/AiSummaryComp"
import { TdsChart } from "../components/TdsChart"
import { TubidityChart } from "../components/TubidityChart"
import { HumidityChart } from "../components/HumidityChart"
import { TurbidityAi } from "../components/TurbidityAI"
import { TdsAi } from "../components/TdsAi"
import { HumidityAi } from "../components/HumidityAI"

const AiSummary = () => {
    return (
        <motion.div 
            className="h-full gap-4 md:gap-0 pt-4 pb-4 md:pb-0 md:pt-0 w-full flex flex-col md:flex-row justify-around items-center bg-white"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <AiSummaryComp title="Key Insight for TDS" chart={<TdsChart/>} button="Load more" text={<TdsAi/>}/>
            <AiSummaryComp title="Key Insight Turbidity" chart={<TubidityChart/>} button="Load more" text={<TurbidityAi/>}/>
            <AiSummaryComp title="Key Insight Humidity" chart={<HumidityChart/>} button="Load more" text={<HumidityAi/>}/>
            </motion.div>
      )
}

export default AiSummary
