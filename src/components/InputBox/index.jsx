import { LoginInput, ErrorMessage } from "./styles";

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

      <div>
        {Icon && <Icon sx={{ color: "var(--pink)" }} />}
        {type === "input" ? (
          <input {...register(name)} placeholder={placeholder} />
        ) : (
          <select {...register(name)}>
            {list.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </div>
    </LoginInput>
  );
}
export default InputBox;
