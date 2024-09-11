import css from "./multiActionButton.module.css";

const MultiActionButton = ({ children, id, handleSelectBtnClick, addClass='' }) => {
  return (
    <button className={`${addClass}`} onClick={() => handleSelectBtnClick(id)}>
      {children}
    </button>
  );
};

export default MultiActionButton;
