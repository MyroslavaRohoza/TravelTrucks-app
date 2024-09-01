import css from "./inputField.module.css";
const InputField = ({
  placeholder,
  width = "100%",
  addClass = "",
  padding = "18px 0px 18px 18px",
  ...props
}) => {
  return (
    <input
      placeholder={placeholder}
      style={{ width, padding }}
      className={`${css.inputField} ${addClass}`}
      {...props}
    />
  );
};

export default InputField;
