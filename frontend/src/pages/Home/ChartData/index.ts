export const dataDoughnut = {
  labels: ["50 anos", "60 anos", "80 anos"],
  datasets: [
    {
      label: "Faixa etária pot pacientes",
      data: [15, 10, 50],
      backgroundColor: [
        "rgb(246, 108, 138)",
        "rgb(139, 209, 255)",
        "rgb(255, 219, 136)",
      ],
      hoverOffset: 4,
    },
  ],
};
export const dataRiskDoughnut = {
  labels: ["50 anos", "60 anos", "80 anos"],
  datasets: [
    {
      label: "Pacientes com risco alto",
      data: [13],
      backgroundColor: ["#FF5B5B", "rgb(139, 209, 255)", "rgb(255, 219, 136)"],
      hoverOffset: 4,
    },
  ],
};
export const dataRecentDoughnut = {
  labels: ["50 anos", "60 anos", "80 anos"],
  datasets: [
    {
      label: "Casos recentes",
      data: [103, 50, 213],
      backgroundColor: ["#FF5B5B", "rgb(139, 209, 255)", "rgb(255, 219, 136)"],
      hoverOffset: 4,
    },
  ],
};

const labels = [
  "janeiro",
  "Fervereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
];
export const dataLine = {
  labels: labels,

  datasets: [
    {
      label: "Tendência de novos casos ao longo do tempo ",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: "#2D9CDB",
      backgroundColor: "rgba(139, 209, 255, 0.363)",
      tension: 0.4,
    },
  ],
};
