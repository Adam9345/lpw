export const dataBar = {
  datasets: [
    {
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "lightgreen", "pink"],
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      data: [10, 15, 25, 30, 28],
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      label: "My First Chart in ChartJS"
    }
  ],
  labels: ["apple", "orange", "banana", "mango", "grape"]
};

export const dataPie = {
  datasets: [
    {
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "lightgreen", "pink"],
      data: [10, 15, 25, 30, 28],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ],
  labels: ["apple", "orange", "banana", "mango", "grape"]
};

export const options = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
