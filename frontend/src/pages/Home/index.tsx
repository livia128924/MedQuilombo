import {
  HouseLine,
  IdentificationCard,
  Scroll,
  Warning,
} from "@phosphor-icons/react";
import ContainerBase from "../../components/Container";
import {
  CardItem,
  CardsGeral,
  DashboardContent,
  DougnutItem,
  GeralCount,
  LineCardsContent,
  LineInfoCardsContent,
  ListNames,
} from "./styles";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  dataComunityLine,
  dataDoughnut,
  dataLine,
  dataListaNomes,
  dataRecentDoughnut,
  dataRiskDoughnut,
} from "./ChartData";
import DoughnutChart from "../../components/Chart/Doughnut";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
function Home() {
  const geralResume = [
    {
      name: "Total de pacientes cadastrados",
      data: 130,
      icon: <Scroll size={42} />,
    },
    {
      name: "Pacientes atendidos no último mês",
      data: 560,
      icon: <IdentificationCard size={42} />,
    },
    {
      name: "Percentual de comunidades com saneamento básico",
      data: 30,
      icon: <HouseLine size={42} />,
    },
    {
      name: "Casos críticos em acompanhamento",
      data: 13,
      icon: <Warning size={42} />,
    },
  ];

  return (
    <ContainerBase title="Dashboard">
      <DashboardContent>
        <CardsGeral>
          {geralResume.map((item) => (
            <CardItem>
              {item.icon}
              <GeralCount>
                <h1>{item.data}</h1>
                <h2>{item.name}</h2>
              </GeralCount>
            </CardItem>
          ))}
        </CardsGeral>
        <LineCardsContent>
          <CardItem style={{ width: "47%" }}>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <DougnutItem>
                <DoughnutChart dataDoughnut={dataDoughnut} />
                Faixa etária pot pacientes
              </DougnutItem>
              <DougnutItem>
                <DoughnutChart dataDoughnut={dataRiskDoughnut} />
                Pacientes com risco alto
              </DougnutItem>
              <DougnutItem>
                <DoughnutChart dataDoughnut={dataRecentDoughnut} />
                Casos recentes
              </DougnutItem>
            </div>
          </CardItem>
          <CardItem style={{ width: "47%", padding: 10 }}>
            <div style={{ width: "100%" }}>
              <Line
                id="chartLine"
                options={{
                  responsive: true,
                  interaction: {
                    mode: "index",
                    intersect: false,
                  },

                  maintainAspectRatio: false,
                  aspectRatio: 5 / 3,
                  plugins: {
                    legend: {
                      position: "bottom" as const,
                      labels: {
                        usePointStyle: true,
                        pointStyle: "cicle",
                      },
                    },
                    title: {
                      display: false,
                    },
                  },
                }}
                data={dataLine}
                width={"100%"}
                height={200}
              />
            </div>
          </CardItem>
        </LineCardsContent>
        <LineInfoCardsContent>
          <CardItem style={{ flex: 2.9 }}>
            <div style={{ width: "100%" }}>
              <Line
                id="chartLine2"
                options={{
                  responsive: true,
                  interaction: {
                    mode: "index",
                    intersect: false,
                  },

                  maintainAspectRatio: false,
                  aspectRatio: 5 / 3,
                  plugins: {
                    legend: {
                      position: "bottom" as const,
                      labels: {
                        usePointStyle: true,
                        pointStyle: "cicle",
                      },
                    },
                    title: {
                      display: false,
                    },
                  },
                }}
                data={dataComunityLine}
                width={"100%"}
                height={250}
              />
            </div>
          </CardItem>
          <CardItem style={{ width: "5%", flexDirection: "column" }}>
            <div> Lista de Pacientes Recentes por Comunidade</div>
            <ListNames>
              {dataListaNomes.map((item) => (
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                  <div>{item.name}</div> -<div>{item.comunity}</div>
                </div>
              ))}
            </ListNames>
          </CardItem>
        </LineInfoCardsContent>
      </DashboardContent>
    </ContainerBase>
  );
}

export default Home;
