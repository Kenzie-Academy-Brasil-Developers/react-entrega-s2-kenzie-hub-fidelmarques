import Button from "../../components/Button";
import Logo from "../../components/Logo";
import InputBox from "../../components/InputBox";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Container, LoginPage } from "./styles";
import { Login as LoginIcon, MailOutline, Key } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido!")
      .required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data, {})
      .then((response) => {
        localStorage.setItem("userdata", JSON.stringify(response.data));
        toast.success("Login efetuado com sucesso!");
        history.push("/dashboard");
      })
      .catch((_) => toast.error("E-mail ou senha incorretos!"));
  };

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <LoginPage>
      <Logo />
      <Container>
        <h2>Login</h2>
        <LoginIcon />
        <InputBox
          register={register}
          name="email"
          error={errors.email?.message}
          icon={MailOutline}
          label="Email"
          placeholder="Insira aqui seu email"
        />
        <InputBox
          register={register}
          name="password"
          error={errors.password?.message}
          icon={Key}
          label="Senha"
          placeholder="Insira aqui sua senha"
        />
        <Button
          color="pink"
          type="submit"
          onClick={handleSubmit(onSubmitFunction)}
        >
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
