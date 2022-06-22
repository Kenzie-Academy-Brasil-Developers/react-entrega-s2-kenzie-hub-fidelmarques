import { Container, PopupBG, Header, Main } from "./styles";
import InputBox from "../InputBox/index";
import Button from "../Button/index";

function PopupAddItem({ children }) {
  const setPopup = children;

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <PopupBG>
      <Container>
        <Header>
          <span>Cadastrar tecnologia</span>
          <button onClick={closePopup}>X</button>
        </Header>
        <Main>
          <InputBox>
            {"Nome"}
            {"Digite o nome"}
          </InputBox>
          <InputBox>
            {"Selecionar status"}
            {"Selecionar status"}
          </InputBox>
          <Button color="pink" onClick={closePopup}>
            Cadastrar tecnologia
          </Button>
        </Main>
      </Container>
    </PopupBG>
  );
}
export default PopupAddItem;
