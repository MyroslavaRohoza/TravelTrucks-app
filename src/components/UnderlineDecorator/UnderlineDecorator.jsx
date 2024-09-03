import css from "./FeaturesContainer.module.css";

const UnderlineDecorator = ({ children }) => {
  return <span className={css.underlineDecorator}>{children}</span>;
};

export default UnderlineDecorator;