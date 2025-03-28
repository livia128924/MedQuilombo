/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../components/Button";
import {
  BoxForm,
  BoxLogin,
  Container,
  DivBox,
  ForgetPassButton,
  Form,
  LogoImg,
  TextWelcome,
} from "./styles";
import BackgroundLogin from "../../assets/illustration.png";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { handleEmailInputChange } from "../../utils/validateFunctions";
import { useGlobalContext } from "../../contexts/AuthProvider/useGlobalContext";

function Login() {
  const { loginMutation } = useGlobalContext();
  const HandleLogin = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    return loginMutation({ email: email, password: password });
  };

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [password, email]);

  const handleButton = (event: any) => {
    event.preventDefault();

    HandleLogin(event);
  };

  const [errorInput, seterrorInput] = useState({
    errors: {
      password: "",
      email: "",
      new_password: "",
    },
  });

  const handlePass = (input: string, value: string) => {
    if (value.length < 8) {
      seterrorInput((prevData: any) => ({
        ...prevData,
        errors: {
          ...prevData.errors,
          [input]: "Insira uma senha válida",
        },
      }));
      //  setAnchorEl(anchorEl ? null : event.currentTarget);
      setDisableButton(true);
    } else {
      seterrorInput((prevData: any) => ({
        ...prevData,
        errors: {
          ...prevData.errors,
          [input]: "",
        },
      }));
      setDisableButton(false);
    }
  };
  return (
    <Container>
      <div>
        <LogoImg src={BackgroundLogin}></LogoImg>
      </div>
      <DivBox>
        <BoxLogin>
          <TextWelcome>Bem-Vindo!</TextWelcome>

          <BoxForm>
            <Form onSubmit={handleButton}>
              <TextField
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                label={"E-mail"}
                onBlur={(e: any) =>
                  handleEmailInputChange(e, seterrorInput, "email")
                }
                error={!!errorInput.errors.email}
                type="email"
              />
              <TextField
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                label={"Senha"}
                onBlur={() => handlePass("password", password)}
                error={!!errorInput.errors.password}
                type="password"
              />
              <div style={{ alignSelf: "center" }}>
                <Button
                  Children={"Entrar"}
                  onClick={handleButton}
                  disabled={disableButton}
                  variant="contained"
                  weight={800}
                />
              </div>
            </Form>
          </BoxForm>

          <ForgetPassButton onClick={() => console.log("setForgetPass")}>
            Esqueci minha senha
          </ForgetPassButton>
        </BoxLogin>
      </DivBox>
    </Container>
  );
}

export default Login;
