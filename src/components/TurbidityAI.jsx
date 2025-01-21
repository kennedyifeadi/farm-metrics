import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from 'react';
import { TurbidityChartData } from '../data/TurbidityData'
export const TurbidityAi = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_REACT_API_KEY
  const genAI = new GoogleGenerativeAI(API_KEY)

  const dataOne = [...TurbidityChartData.datasets[0].data];
  const labelOne = TurbidityChartData.datasets[0].label;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Analyze the following water health data for the past week, consisting of turbidity. Provide not more than 20 words, actionable summary of the trends and its impact on water health based on the data: ${labelOne} ${dataOne}, highlighting the overall water health and recommendations. not more than 20 words`
      const result = await model.generateContent(prompt);
      await sleep(1000);
      setIsLoading(false)
      setResponse(result.response.text());
    } catch (error) {
      console.log(error);
      setResponse("Error fetching data");

    }
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <div className="w-full flex items-center h-[150px] max-h-[150px] overflow-auto scroollSet">
      <div className="flex w-full text-[15px]">
          {isLoading ? <DotLottieReact
            src="https://lottie.host/84b29f64-08a4-4073-8f17-8e3e578a92b6/UPR6ahml8E.json"
            loop
            autoplay
          /> : response}
      </div>
    </div>
  );
};
