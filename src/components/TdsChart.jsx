import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { TDSChartData } from "../data/TdsData"
export const TdsChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            
          x: {
            ticks: {
              font: {
                size: 8,
                weight: "bold",
                color: '#ffff',
              },
            },
          },
          y: {
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
              xlabels: "Temperature",
              color: "white"
            }
          },
      };
  return <Pie options={options} data={TDSChartData}/>
}

