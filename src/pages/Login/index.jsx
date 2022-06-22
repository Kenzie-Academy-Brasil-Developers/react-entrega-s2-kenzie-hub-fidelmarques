import { useHistory } from "react-router-dom";
import { Container, LoginPage } from "./styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import InputBox from "../../components/InputBox";

function Login() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <LoginPage>
      <Logo />
      <Container>
        <h2>Login</h2>
        <InputBox>
          {"Email"}
          {"Insira aqui seu email"}
        </InputBox>
        <InputBox>
          {"Senha"}
          {"Insira aqui sua senha"}
        </InputBox>
        <Button color="pink" onClick={() => handleNavigation("/dashboard")}>
          Entrar
        </Button>
        <span>Ainda não possui uma conta?</span>
        <Button color="grey1" onClick={() => handleNavigation("/register")}>
          Cadastre-se
        </Button>
      </Container>
    </LoginPage>
  );
}
export default Login;
