import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import DataVisualization from "../pages/DataVisualization";
import AiSummary from "../pages/AiSummary";
export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div className="w-full h-[90%]">
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dashboard/>} exact />
                <Route path="/datavisualization" element={<DataVisualization/>} />
                <Route path="/aisummary" element={<AiSummary/>} />
                <Route path="*" element={<PageNotFound/>} /> 
            </Routes>
      </AnimatePresence>
      </div>
    )
}

