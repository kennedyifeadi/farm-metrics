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
  // const config ={
  //   type: "scatter",
  //   data,
  //   options
  // }
    const options = {
      responsive: true,
      maintainAspectRatio: false,
        plugins: {
            tooltip: true,
            legend: {
              labels: {
                usePointStyle: true,
                boxWidth: 5,
                boxHeight: 5
              },
              position: "top",
              xlabels: "Turbidity",
              color: "white"
            }
          },
          scales: {
            x: {
              ticks: {
                color: "gray"
              },
              beginAtZero: true,
              max: 10,
              title: {
                color: 'gray',
                display: true,
                text: "X values"
              },
              grid: {
                color: "gray",
                display: true
              }
            },
            y: {
              ticks: {
                color: "gray"
              },
              beginAtZero: true,
              max: 10,
              title: {
                color: 'gray',
                display: true,
                text: "Y values"
              },
              grid: {
                color: "gray",
                display: true
              }
            }
          }
    }
  return <Scatter options={options} data={TurbidityChartData} />;
}

