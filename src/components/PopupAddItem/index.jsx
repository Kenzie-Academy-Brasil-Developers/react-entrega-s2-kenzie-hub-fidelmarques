import { Container, PopupBG, Header, Main } from "./styles";
import InputBox from "../InputBox/index";
import Button from "../Button/index";
import { useState } from "react";
import { Badge, Grade } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function PopupAddItem({ children }) {
  const [popup, setPopup] = children;
  const [status, setStatus] = useState([
    "Iniciante",
    "Intermediário",
    "Avançado",
  ]);
  const userData = JSON.parse(localStorage.getItem("userdata"));

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${userData.token}` },
      })
      .then((response) => {
        toast.success("Tecnologia cadastrada com sucesso!");
        closePopup();
      })
      .catch((_) => toast.error(`Erro!`));
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <PopupBG state={popup}>
      <Container>
        <Header>
          <span>Cadastrar tecnologia</span>
          <button onClick={closePopup}>X</button>
        </Header>
        <Main>
          <InputBox
            register={register}
            name="title"
            icon={Badge}
            label="Nome"
            placeholder="Digite o nome"
          />
          <InputBox
            register={register}
            name="status"
            icon={Grade}
            label="Selecionar status"
            placeholder="Digite o nome"
            type="select"
            list={status}
          />
          <Button color="pink" onClick={handleSubmit(onSubmitFunction)}>
            Cadastrar tecnologia
          </Button>
        </Main>
      </Container>
    </PopupBG>
  );
}
export default PopupAddItem;
