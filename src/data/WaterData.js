export const lineChartData = {
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
            label: "Turbidity",
            data: [1, 0.4, 3, 5, 2, 3, 4],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1
        },
        {
            label: "Temperature",
            data: [24, 27, 23, 30, 26, 24, 29],
            fill: false,
            borderColor: "rgb(54, 162, 235)",
            tension: 0.1
        },
        {
            label: "TDS",
            data: [350, 357, 500, 1000, 1200, 1400, 1250],
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1
        },        
        {
            label: "Humidity",
            data: [50, 27, 60, 55, 39, 84, 72],
            fill: false,
            borderColor: "rgb(45, 99, 132)",
            tension: 0.1
        },

    ]
}