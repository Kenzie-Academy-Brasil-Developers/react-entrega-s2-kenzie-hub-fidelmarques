import { Container } from "./styles";

function Button({ children, color, ...rest }) {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
}
export default Button;
