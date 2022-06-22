import {
  Header,
  MainInfo,
  MainContainer,
  DashboardPage,
  ContainerHeader,
  ContainerMain,
} from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button/index";
import Logo from "../../components/Logo";
import plusButton from "../../img/plusButton.svg";
import List from "../../components/List";
import PopupAddItem from "../../components/PopupAddItem";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function Dashboard() {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("userdata") !== null
  );
  const [popup, setPopup] = useState(false);
  const [list, setList] = useState([]);
  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem("userdata"));

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const logoutUser = () => {
    localStorage.clear();
    toast.info("Usuário deslogado.");
    handleNavigation("/");
  };

  const updateList = async () => {
    setList(
      await api.get(`/users/${userData.user.id}`).then((response) => {
        return response.data.techs;
      })
    );
  };

  useEffect(() => {
    updateList();
  }, [popup]);

  return (
    <>
      {popup && (
        <PopupAddItem>
          {popup}
          {setPopup}
        </PopupAddItem>
      )}
      {!userLoggedIn ? (
        <>
          <Redirect to="/" />
          {toast.error("Usuário não logado!")}
        </>
      ) : (
        <DashboardPage>
          <Header>
            <Logo />
            <Button color="grey1" onClick={logoutUser}>
              Sair
            </Button>
          </Header>
          <MainInfo>
            <h2>Olá, {userData.user.name}</h2>
            <h3>{userData.user.course_module}</h3>
          </MainInfo>
          <MainContainer>
            <ContainerHeader>
              <h2>Tecnologias</h2>
              <Button color="grey1" onClick={() => setPopup(true)}>
                <img src={plusButton} alt="Plus Button" />
              </Button>
            </ContainerHeader>
            <ContainerMain>
              <List arr={list} />
            </ContainerMain>
          </MainContainer>
        </DashboardPage>
      )}
    </>
  );
}
export default Dashboard;
