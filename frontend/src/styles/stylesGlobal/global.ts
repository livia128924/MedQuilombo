/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 0 30px;
  background-color: #f8fbfd;
  /* overflow-y: auto; */
  padding-bottom: 1rem;
`;

export const ActionsContent = styled.div`
  width: 100%;
  //background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 56px;
`;

export const FilterContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 44%;
`;
export const ButtonContent = styled.div`
  display: flex;
`;

export const FormContent = styled.div`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-y: hidden;
`;

export const FormTitle = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
  color: #1e325f;
`;

export const ContainerButton = styled(Box)`
  // width: 200px;
  margin: 20px;
  display: flex;
  gap: 32px;
  justify-content: center;
  // width: 100%;
`;
