import { useState } from "react";
import Button from "../../components/Button";
import ContainerBase from "../../components/Container";
import BasicTable from "../../components/Table";
import { ButtonContent } from "../../styles/stylesGlobal/global";
import { PatientContent } from "./styles";
import usePatientController from "./usePatientController";
import { PlusCircle } from "@phosphor-icons/react";

function Patient() {
  const { columnsPatient, usersData } = usePatientController();
  const [openCreateUsers, setOpenCreateUsers] = useState(false);
  return (
    <ContainerBase title="Paciente">
      <ButtonContent>
        <Button
          Children={"Cadastrar Paciente"}
          onClick={() => setOpenCreateUsers(true)}
          // disabled={disableButton}
          variant="contained"
          Icon={() => <PlusCircle size={24} />}
        />
      </ButtonContent>
      <PatientContent>
        <BasicTable columns={columnsPatient} rows={usersData} />
      </PatientContent>
    </ContainerBase>
  );
}

export default Patient;
