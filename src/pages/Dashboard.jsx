import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DashboardComp } from "../components/DashboardComp";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TurbidityIcon } from "../icons/Turbidity";
import { TDSIcon } from "../icons/TDS";
import { TubidityChart } from "../components/TubidityChart";
import { TemperatureChart } from "../components/TemperatureChart";
import { HumidityChart } from "../components/HumidityChart";
import { TdsChart } from "../components/TdsChart";
import axios from "axios";
import { onValue, ref, db } from "../notification/firebase";

const Dashboard = () => {
  // const AUTH_TOKEN = "M7MEUsmZrZP0VZgzDO-T7yGsogSe4KeY";
  // const BLYNK_STATUS_URL = `https://ny3.blynk.cloud/external/api/isHardwareConnected?token=${AUTH_TOKEN}`;
  const weatherAPI =
    "https://api.weatherapi.com/v1/forecast.json?key=a4f33c6a6aa4444a949135854241011&q=ibadan&days=2&aqi=yes&alerts=yes";

  const [turbidity, setTurbidity] = useState("Offline");
  const [temperature, setTemperature] = useState("");
  const [tds, setTds] = useState("Offline");
  const [humidity, setHumidity] = useState("Offline");
  const [alerts, setAlerts] = useState([]);
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get(weatherAPI);
      const data = res.data;
      setTemperature(data.current.temp_c);
      setHumidity(data.current.humidity);
    } catch (error) {
      console.error("Weather API error:", error);
    }
  };

  const updateDashboard = () => {
    onValue(ref(db, "sensorData"), (snapshot) => {
      const sensorData = snapshot.val();
      setData(sensorData); 
      setTurbidity(sensorData?.turbidity || "Offline");
      setTds(sensorData?.tds || "Offline");
    });
  };


  function checkAlerts(newTurbidity, newTds) {
    const newAlerts = [];
    const currentTime = new Date().toLocaleTimeString();

    if (parseFloat(newTurbidity) > 66.7) {
      newAlerts.push(
        `Turbidity level is high: ${newTurbidity} at ${currentTime}`
      );
    }
    if (parseFloat(newTds) > 250) {
      newAlerts.push(`TDS level is high: ${newTds} ppm at ${currentTime}`);
    }
    if (newAlerts.length > 0) {
      setAlerts((prevAlerts) => [...new Set([...newAlerts, ...prevAlerts])]);
    }
  }

  useEffect(() => {
  updateDashboard();
}, []); 

useEffect(() => {
  checkAlerts(turbidity, tds);
}, [turbidity, tds]); 


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      className="h-full w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full p-4 h-full flex flex-wrap gap-y-4 gap-x-10">
        <DashboardComp
          size={1}
          title="Temperature"
          value={temperature + "°C"}
          color="dark"
          status="Normal"
          icon={<FaTemperatureThreeQuarters />}
          text="Low (<20°C): Slows down fish metabolism"
          chart={<TemperatureChart />}
        />
        <DashboardComp
          size={1}
          title="Humidity"
          value={humidity + "%"}
          color="dark"
          status="Soft"
          icon={<WiHumidity />}
          text="High (>70%): Excess humidity can lead to fungal growth and diseases in ponds which would affect production rate."
          chart={<HumidityChart />}
        />
        <DashboardComp
          size={1}
          title="Turbidity"
          value={turbidity}
          color="dark"
          status="Soft"
          icon={<TurbidityIcon />}
          text="High (<5 NTU & > 250 NTU): Indicates excessive suspended particles, reducing light penetration and oxygen levels, potentially stressing fish"
          chart={<TubidityChart />}
        />
        <DashboardComp
          size={1}
          title="TDS"
          value={tds + " ppm"}
          color="dark"
          status="Normal"
          icon={<TDSIcon />}
          text="Low (>300 ppm): Water contains excessive feed and waste materials."
          chart={<TdsChart />}
        />
        <div className="md:w-[64.5%] w-full p-4 bg-white shadow-lg text-black rounded-lg h-max-[48%] overflow-auto">
          <h2 className="text-lg font-bold">Alerts</h2>
          {alerts.length === 0 ? (
            <p>No alerts</p>
          ) : (
            <ul>
              {alerts.map((alert, index) => (
                <li key={index} className="text-red-500 font-medium">
                  {alert}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
