import { ReactNode } from "react";
import { Container, ContainerChildren, TitleContainer } from "./styles";

interface IContainerProps {
  children: ReactNode;
  title: string;
}
function ContainerBase({ title, children }: IContainerProps) {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>

      <ContainerChildren>{children}</ContainerChildren>
    </Container>
  );
}

export default ContainerBase;
