import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  height: 100%;
`;
export const ContainerChildren = styled.div`
  flex: 1; /* Faz com que ocupe todo o espaço disponível */
  overflow-y: auto; /* Habilita o scroll quando necessário */
  // height: -webkit-fill-available;
  height: 100%;

  //  max-height: calc(100vh - 120px);
  //margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
  padding-bottom: 24px;
`;
