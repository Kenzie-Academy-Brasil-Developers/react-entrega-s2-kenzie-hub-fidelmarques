import Logo from "../../components/Logo";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

import {
  RegisterMain,
  RegisterHeader,
  RegisterPage,
  RegisterMainInfo,
} from "./styles";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <RegisterPage>
      <RegisterHeader>
        <Logo />
        <Button color="grey3" onClick={() => handleNavigation("/login")}>
          Voltar
        </Button>
      </RegisterHeader>
      <RegisterMain>
        <RegisterMainInfo>
          <h2>Crie sua conta</h2>
          <h3>Rapido e grátis, vamos nessa</h3>
        </RegisterMainInfo>
        <InputBox>
          {"Nome"}
          {"Digite aqui seu nome"}
        </InputBox>
        <InputBox>
          {"Email"}
          {"Digite aqui seu email"}
        </InputBox>
        <InputBox>
          {"Senha"}
          {"Digite aqui sua senha"}
        </InputBox>
        <InputBox>
          {"Confirmar Senha"}
          {"Confirme aqui sua senha"}
        </InputBox>
        <InputBox>
          {"Bio"}
          {"Fale sobre você"}
        </InputBox>
        <InputBox>
          {"Contato"}
          {"Opção de contato"}
        </InputBox>
        <InputBox>
          {"Selecionar módulo"}
          {"Primeiro módulo"}
        </InputBox>
        <Button color="pink" onClick={() => handleNavigation("/dashboard")}>
          Cadastrar
        </Button>
      </RegisterMain>
    </RegisterPage>
  );
}
export default Register;
