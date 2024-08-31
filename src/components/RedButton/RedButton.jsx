import css from "./button.module.css";

const RedButton = ({ children}) => {
  return (
    <button
      className={`${css.button} captionText`}
    >
      {children}
    </button>
  );
};

export default RedButton;
