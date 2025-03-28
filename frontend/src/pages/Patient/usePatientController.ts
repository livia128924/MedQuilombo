/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import users from "../../service/users";
import { useState } from "react";

function usePatientController() {
  const columnsPatient: GridColDef[] = [
    { field: "name", headerName: "Nome", width: 130 },

    {
      field: "cpf",
      headerName: "CPF",
      width: 90,
    },
    {
      field: "phone",
      headerName: "Telefone",
      width: 160,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 160,
    },
    {
      field: "birthDate",
      headerName: "Data de nascimento",
      width: 160,
    },
    {
      field: "lastAppointment",
      headerName: "Última consulta",
      width: 160,
    },
  ];

  const [usersData, setUsersData] = useState<any[]>([]);
  const { refetch } = useQuery(
    ["users"],
    () => {
      return users.getUsers();
    },

    {
      onSuccess: (dataOnSuccess) => {
        console.log("dataOnSuccess?.data?.data", dataOnSuccess?.data?.data);
        const newList = dataOnSuccess?.data?.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          cpf: item.cpf,
          phone: item.phone,
          email: item.email,
          birthDate: item.birthDate,
          lastAppointment: item.lastAppointment,
        }));
        //  console.log("dataOnSuccess?.data", newList);
        setUsersData(newList);
      },
      keepPreviousData: false,
    }
  );

  return {
    columnsPatient,
    usersData,
    refetch,
  };
}

export default usePatientController;
