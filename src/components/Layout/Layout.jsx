import clsx from "clsx";
import Icon from "../Icon/Icon";
import css from "./layout.module.css";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(
      "captionText",
      css.captionTextColor,
      isActive && css.activeNavLink
    );
  };
  return (
    <>
      <header className={css.header}>
        <NavLink to="/">
          <Icon id="icon-Logo" height={16} />
        </NavLink>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </header>
      <>{children}</>
    </>
  );
};

export default Layout;
