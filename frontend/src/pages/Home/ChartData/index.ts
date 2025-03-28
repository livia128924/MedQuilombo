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
const comunidadesQuilombolas = [
  "Kalunga",
  "Caiana dos Crioulos",
  "Vão de Almas",
  "Mocambo",
  "Saco do Curtume",
  "São Pedro",
  "Tapuio",
  "Rio das Rãs",
  "Bombas",
  "Baía Formosa",
  "Cruzeiro",
  "Riacho do Meio",
  "São José da Serra",
  "Galvão",
  "Jatobá",
  "Caiçara",
  "Palmares",
  "Lagoa das Piranhas",
  "Pedra Branca",
  "Terra Seca",
];

export const dataComunityLine = {
  labels: comunidadesQuilombolas,

  datasets: [
    {
      label: "Casos por comunidades",
      data: [
        159, 126, 116, 65, 38, 151, 135, 180, 64, 116, 134, 103, 20, 27, 118,
        49, 191, 127, 77, 96,
      ],
      fill: false,
      borderColor: "#FF5B5B",

      tension: 0.4,
    },
  ],
};

export const dataListaNomes = comunidadesQuilombolas.map(
  (comunidade, index) => ({
    name: `name ${index + 1}`,
    comunity: comunidade,
    id: `${index + 1}`,
  })
);
