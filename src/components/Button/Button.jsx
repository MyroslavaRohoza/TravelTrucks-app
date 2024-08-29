import css from "./button.module.css";

const Button = ({ children, btnColor, textColor, ...props }) => {
  return (
    <button
      className={`${css.reusableButton} captionText`}
      style={{ backgroundColor: btnColor, color: textColor, ...props }}
    >
      {children}
    </button>
  );
};

export default Button;
