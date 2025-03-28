import { ReactNode } from "react";
import { Container, ContainerChildren, TitleContainer } from "./styles";
import { Divider } from "@mui/material";

interface IContainerProps {
  children: ReactNode;
  title: string;
}
function ContainerBase({ title, children }: IContainerProps) {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <Divider
        sx={{
          backgroundColor: "#7a9cf9",
          borderBottomWidth: 2,
          borderRadius: 2,
        }}
      />
      <ContainerChildren>{children}</ContainerChildren>
    </Container>
  );
}

export default ContainerBase;
