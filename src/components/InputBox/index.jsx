import { LoginInput, ErrorMessage, InputDiv } from "./styles";

function InputBox({
  register,
  name,
  error,
  icon: Icon,
  label,
  placeholder,
  type = "input",
  list,
}) {
  return (
    <LoginInput>
      <label>
        {label}
        {!!error && <ErrorMessage> {error.toUpperCase()}</ErrorMessage>}
      </label>

      <InputDiv>
        {Icon && <Icon sx={{ color: "var(--pink)" }} />}
        {type === "input" ? (
          <input
            {...register(name)}
            placeholder={placeholder}
            type={name === "passwordConfirm" ? `password` : name}
          />
        ) : (
          <select {...register(name)}>
            {list.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </InputDiv>
    </LoginInput>
  );
}
export default InputBox;
