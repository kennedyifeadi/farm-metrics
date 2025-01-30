import { TDSChartData } from "../data/TdsData"
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController
  );
export const TdsChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            
          x: {
            grid: {
                color: "gray",
                display: false
              },
            ticks: {
              font: {
                size: 8,
                weight: "bold",
                color: '#ffff',
              },
            },
          },
          y: {
            grid: {
                color: "gray",
                display: false
              },
            ticks: {
              font: {
                size: 14,
                weight: "500",
                color: '#ffff',
              },
            },
          },
        },
        plugins: {
            tooltip: true,
            legend: {
              labels: {
                usePointStyle: false,
                boxWidth: 10,
                boxHeight: 5
              },
              position: "top",
              xlabels: "Humidity",
              color: "white"
            }
          },
      };
    return <Bar data={TDSChartData} options={options}/>
}

