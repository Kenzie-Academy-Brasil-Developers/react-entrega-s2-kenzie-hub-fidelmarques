import Logo from "../../components/Logo";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  MailOutline,
  Key,
  Badge,
  SyncLock,
  MenuBook,
  ContactPhone,
  Grading,
} from "@mui/icons-material";
import {
  RegisterMain,
  RegisterHeader,
  RegisterPage,
  RegisterMainInfo,
} from "./styles";

function Register() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido!")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório!"),

    name: yup.string().required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), "As senhas não combinam."])
      .required("Campo obrigatório!"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(yupResolver(schema));

  const onSubmitFunction = ({ ...data }) => {
    const registerData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.module,
    };
    api
      .post("/users", registerData, {})
      .then((_) => {
        toast.success(
          "Usuário cadastrado com sucesso. Agora você já pode fazer o login!"
        );
        handleNavigation("/login");
      })
      .catch((_) => toast.error(`Erro!`));
  };

  const [modules, setModules] = useState([
    "Primeiro módulo",
    "Segundo módulo",
    "Terceiro módulo",
    "Quarto módulo",
    "Quinto módulo",
    "Sexto módulo",
  ]);

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
        <InputBox
          register={register}
          name="name"
          error={errors.name?.message}
          icon={Badge}
          label="Nome"
          placeholder="Digite aqui seu nome"
        />
        <InputBox
          register={register}
          name="email"
          error={errors.email?.message}
          icon={MailOutline}
          label="Email"
          placeholder="Digite aqui seu email"
        />
        <InputBox
          register={register}
          name="password"
          error={errors.password?.message}
          icon={Key}
          label="Senha"
          placeholder="Digite aqui sua senha"
        />
        <InputBox
          register={register}
          name="passwordConfirm"
          error={errors.confirmPassword?.message}
          icon={SyncLock}
          label="Confirmar Senha"
          placeholder="Confirme aqui sua senha"
        />
        <InputBox
          register={register}
          name="bio"
          error={errors.bio?.message}
          icon={MenuBook}
          label="Bio"
          placeholder="Fale sobre você"
        />
        <InputBox
          register={register}
          name="contact"
          error={errors.contact?.message}
          icon={ContactPhone}
          label="Contato"
          placeholder="Opção de contato"
        />
        <InputBox
          register={register}
          name="module"
          icon={Grading}
          label="Selecionar módulo"
          placeholder="Primeiro módulo"
          type="select"
          list={modules}
        />
        <Button
          type="submit"
          color="pink"
          onClick={handleSubmit(onSubmitFunction)}
        >
          Cadastrar
        </Button>
      </RegisterMain>
    </RegisterPage>
  );
}
export default Register;
