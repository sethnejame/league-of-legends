import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#FFA500" };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/" activeStyle={activeStyle}>
        Home
      </NavLink>{" "}
      {"|"}
      <NavLink to="/stats" activeStyle={activeStyle}>
        Stats
      </NavLink>
      {"|"}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
