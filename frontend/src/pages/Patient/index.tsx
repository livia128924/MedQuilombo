import ContainerBase from "../../components/Container";
import BasicTable from "../../components/Table";
import { PatientContent } from "./styles";

function Patient() {
  return (
    <ContainerBase title="-">
      <PatientContent>
        <BasicTable />
      </PatientContent>
    </ContainerBase>
  );
}

export default Patient;
