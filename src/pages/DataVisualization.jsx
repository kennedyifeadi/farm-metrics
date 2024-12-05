import { motion } from "framer-motion"

const DataVisualization = () => {
    return (
        <motion.div 
            className="h-full w-full flex flex-col"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <h1 className="text-3xl font-bold text-center mt-10">Data Visualization</h1>
            </motion.div>
      )
}

export default DataVisualization
