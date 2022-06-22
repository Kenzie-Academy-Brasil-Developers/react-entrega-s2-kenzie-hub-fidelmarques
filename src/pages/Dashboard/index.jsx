import {
  Header,
  MainInfo,
  MainContainer,
  DashboardPage,
  ContainerHeader,
  ContainerMain,
} from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/index";
import Logo from "../../components/Logo";
import plusButton from "../../img/plusButton.svg";
import List from "../../components/List";
import PopupAddItem from "../../components/PopupAddItem";
import { useState } from "react";

function Dashboard() {
  const [popup, setPopup] = useState(false);
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      {popup && <PopupAddItem>{setPopup}</PopupAddItem>}
      <DashboardPage>
        <Header>
          <Logo />
          <Button color="grey1" onClick={() => handleNavigation("/")}>
            Sair
          </Button>
        </Header>
        <MainInfo>
          <h2>Olá, seu nome</h2>
          <h3>Primeiro módulo (Introdução ao Frontend)</h3>
        </MainInfo>
        <MainContainer>
          <ContainerHeader>
            <h2>Tecnologias</h2>
            <Button color="grey1" onClick={() => setPopup(true)}>
              <img src={plusButton} alt="Plus Button" />
            </Button>
          </ContainerHeader>
          <ContainerMain>
            <List />
          </ContainerMain>
        </MainContainer>
      </DashboardPage>
    </>
  );
}
export default Dashboard;
