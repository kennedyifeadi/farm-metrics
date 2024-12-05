import { TurbidityChartData } from "../data/TurbidityData"
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  } from "chart.js";
  import { Scatter } from "react-chartjs-2";
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
export const TubidityChart = () => {
    const options = {
        plugins: {
            tooltip: false,
            legend: {
              labels: {
                usePointStyle: true,
                boxWidth: 5,
                boxHeight: 5
              },
              position: "top",
              xlabels: "Turbidity"
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 40,
              title: {
                display: true,
                text: "Turbidity values"
              },
              grid: {
                display: true
              }
            },
            y: {
              beginAtZero: true,
              max: 200,
              title: {
                display: true,
                text: "Day of the week"
              },
              grid: {
                display: false
              }
            }
          }
    }
  return <Scatter options={options} data={TurbidityChartData} />;
}

