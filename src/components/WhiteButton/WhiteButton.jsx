import css from './whiteButton.module.css'

const WhiteButton = ({ children, addClass = "", onClick }) => {
  return <button className={`${css.btn} ${addClass}`} onClick={onClick}>{children}</button>;
};

export default WhiteButton