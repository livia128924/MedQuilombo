/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ dataDoughnut }: any) {
  const myPlugin = {
    id: "myPlugin",
  };

  return (
    <Doughnut
      data={dataDoughnut}
      plugins={[myPlugin]}
      options={{
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 5,
          },
        },
        cutout: "65%",
        plugins: {
          legend: {
            display: false,
            position: "center",
          },
        },
      }}
    />
  );
}
