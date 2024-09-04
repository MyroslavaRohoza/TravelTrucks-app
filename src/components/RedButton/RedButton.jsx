import css from "./button.module.css";

const RedButton = ({ children, onClick,type, addClass=''  }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${css.button} captionText ${addClass}`}
    >
      {children}
    </button>
  );
};

export default RedButton;
