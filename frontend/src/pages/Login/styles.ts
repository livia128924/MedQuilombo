/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: "white";
  overflow: auto;
  padding: 5%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.8);
    z-index: 0;
    opacity: 0.2;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const LogoImg = styled.img`
  z-index: 2;
  height: auto;
  width: 90%;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1020px) {
    display: none;
  }
`;
export const DivBox = styled.div`
  animation: fade-in 1.5s ease-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
export const BoxLogin = styled<any>(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  // height: auto;
  width: ${(props) => (props.isFirstAcess ? "32vw" : "26vw")};
  flex-shrink: 0;
  // height: 109%;
  padding: 47px 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px 0px #00000040;
  border-radius: 8px;
  @media screen and (max-width: 1020px) {
    width: 40vw;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const TextWelcome = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0%;
  text-align: center;
  color: #1e325f;
`;
export const TextForgotPass = styled.div`
  font-weight: 900;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: center;

  color: #172647;
`;

export const Logo = styled.img`
  /* position: absolute; */
  top: 0;
  width: 60%;
  height: 55px;
  margin-bottom: 2%;
  animation: move-up 1s ease-out;
  transform: translateY(0) scale(1);
  opacity: 1;
  z-index: 1;

  @keyframes move-up {
    0% {
      transform: translateY(90%) scale(1.4);
    }

    100% {
      transform: translateY(0) scale(1);
    }
  }
`;

export const BoxForm = styled<any>(Box)({
  // marginBottom: "10%",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const Form = styled.form`
  //background-color: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const ForgetPassButton = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: Auto;
  text-decoration-skip-ink: auto;
  text-align: center;
  color: #2e3b2f;
  &:hover {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-style: solid;
    color: #779878;
  }
`;

export const TextMessage = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: #1e325f;
  padding: 0px 2%;
`;

export const PopoverLogin = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  h3 {
    font-weight: 800;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #212121;
  }
  a {
    color: #6f6f6f;
  }

  .row-itens {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
    align-items: center;
  }
  .row-error {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
    align-items: center;
    h3 {
      font-weight: 800;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 0%;
      color: #c13f38;
    }
    a {
      color: #c13f38;
    }
  }
`;

export const ForgotTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: center;
    color: #172647;
  }
`;
