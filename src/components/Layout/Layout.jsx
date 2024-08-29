import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
