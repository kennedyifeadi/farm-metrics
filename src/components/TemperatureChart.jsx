import { TemperatureChartData } from '../data/TemperatureData'
import { Line } from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend} from 'chart.js'
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

export const TemperatureChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            
          x: {
            grid: {
                color: "gray",
                display: true
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
                display: true
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
              xlabels: "Turbidity",
              color: "white"
            }
          },
      };
  return <Line data={TemperatureChartData} options={options}/>

}

