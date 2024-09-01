import css from "./button.module.css";

const RedButton = ({ children, onClick, addClass=''  }) => {
  return (
    <button
      onClick={onClick}
      className={`${css.button} captionText ${addClass}`}
    >
      {children}
    </button>
  );
};

export default RedButton;
