import { useHistory } from "react-router-dom";
import { Text } from "./styles";

function Logo() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return <Text onClick={() => handleNavigation("/")}>Kenzie Hub</Text>;
}
export default Logo;
