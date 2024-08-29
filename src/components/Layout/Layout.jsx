import css from "./layout.module.css";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <span>
          Travel<span className={css.logoAccent}>Trucks</span>
        </span>
        <nav className={css.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
