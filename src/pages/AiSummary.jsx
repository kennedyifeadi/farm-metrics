import { motion } from "framer-motion"
import { AiSummaryComp } from "../components/AiSummaryComp"

const AiSummary = () => {
    return (
        <motion.div 
            className="h-full w-full flex flex-col md:flex-row justify-around items-center bg-[#161616]"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <AiSummaryComp title="Key Insight 1" button="Load more" text="kbjjdknew"/>
            <AiSummaryComp title="Key Insight 1" button="Load more" text="kbjjdknew"/>
            <AiSummaryComp title="Key Insight 1" button="Load more" text="kbjjdknew"/>
            </motion.div>
      )
}

export default AiSummary
