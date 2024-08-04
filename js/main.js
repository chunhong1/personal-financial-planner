const chartDataSets = [
    {
        labels: ["Fruits and Vegetables", "Dairy Products", "Meat and Seafood", "Grains and Cereals", "Beverage"],
        data: [30, 17, 10, 7, 36],
        backgroundColors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
    },
    {
        labels: ["Fruits and Vegetables", "Grains and Cereals", "Dairy Products", "Beverage", "Meat and Seafood"],
        data: [25, 20, 15, 10, 30],
        backgroundColors: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"]
    },
    {
        labels: ["Econsave", "Lotus", "Aeon", "99 Speedmart", "7-Eleven"],
        data: [35, 22, 12, 8, 23],
        backgroundColors: ["#FF8C00", "#00FF8C", "#8C00FF", "#00CFFF", "#FF00C7"]
    }
];

const createChart = (chartId, chartData) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: chartData.labels,
            datasets: [{
                label: "Popularity",
                data: chartData.data,
                backgroundColor: chartData.backgroundColors,
            }],
        },
        options: {
            borderWidth: 1,
            borderRadius: 5,
            hoverBorderWidth: 3,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });
};

const chartIds = ["chart1", "chart2", "chart3"];

chartIds.forEach((chartId, index) => {
    createChart(chartId, chartDataSets[index]);
});

const ulElements = document.querySelectorAll(".stats .details ul");

ulElements.forEach((ul, index) => {
    chartDataSets[index].labels.forEach((label, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${label}: <span class='percentage'>${chartDataSets[index].data[i]}%</span>`;
        ul.appendChild(li);
    });
});
