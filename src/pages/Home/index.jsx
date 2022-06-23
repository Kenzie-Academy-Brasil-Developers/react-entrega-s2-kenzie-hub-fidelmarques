import { Container, HomePage } from "./styles";
import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router";
import Logo from "../../components/Logo";
import { useState } from "react";

function Home() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("userdata") !== null
  );

  return (
    <>
      {userLoggedIn ? (
        <>
          <Redirect to="/dashboard" />
        </>
      ) : (
        <HomePage>
          <Container>
            <Logo />
            <h2>Seja bem vindo!</h2>
            <Button color="pink" onClick={() => handleNavigation("/login")}>
              Iniciar
            </Button>
          </Container>
        </HomePage>
      )}
    </>
  );
}
export default Home;
