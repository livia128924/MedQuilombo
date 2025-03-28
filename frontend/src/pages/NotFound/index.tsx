import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import styled from "styled-components";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <Content>
        <h1>Pagina não encontrada</h1>

        <Button Children={"Voltar"} onClick={() => navigate("/")} />
      </Content>
    </div>
  );
}

export default NotFound;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  color: #636c82;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;
