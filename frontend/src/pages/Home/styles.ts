/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export const DashboardContent = styled.div`
  background-color: #ffffff;
  padding-top: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardsGeral = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-y: auto;
  padding: 10px;
  background-color: #ffffff;
  justify-content: space-between; /* Distribui os itens igualmente */
`;
export const CardItem = styled.div`
  background-color: white;
  box-shadow: 0px 4px 6px 0px #00000040;
  border-radius: 14px;
  padding: 30px;
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;
export const GeralCount = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 34px;
    font-weight: 900;
  }
  h2 {
    font-size: 11px;
  }
`;
export const LineCardsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  padding: 10px;
  background-color: #ffffff;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LineInfoCardsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  background-color: #ffffff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DougnutItem = styled.div`
  height: 150px;
  width: 35%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListNames = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  height: 300px;
  overflow-y: auto;
`;
