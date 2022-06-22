import { Container, HomePage } from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import Logo from "../../components/Logo";

function Home() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <HomePage>
      <Container>
        <Logo />
        <h2>Seja bem vindo!</h2>
        <Button color="pink" onClick={() => handleNavigation("/login")}>
          Iniciar
        </Button>
      </Container>
    </HomePage>
  );
}
export default Home;
