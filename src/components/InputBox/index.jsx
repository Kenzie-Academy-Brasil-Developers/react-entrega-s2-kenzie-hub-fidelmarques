import { LoginInput } from "./styles";

function InputBox(props) {
  const [label, placeholder] = props.children || ["LABEL", "PLACEHOLDER"];

  return (
    <LoginInput>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </LoginInput>
  );
}
export default InputBox;
