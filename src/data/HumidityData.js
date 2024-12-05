export const HumidityChartData = {
    labels:[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [        
        {
            label: "Humidity",
            data: [50, 27, 60, 55, 39, 84, 72],
            fill: false,
            backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
        },

    ]
}