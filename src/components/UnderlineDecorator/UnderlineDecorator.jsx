import css from "./underlineDecorator.module.css";

const UnderlineDecorator = ({ children }) => {
  return <span className={css.underlineDecorator}>{children}</span>;
};

export default UnderlineDecorator;
