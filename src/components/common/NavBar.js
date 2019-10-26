import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link to="/">Home</Link> {"|"}
    <Link to="/stats">Stats</Link>
    {"|"}
    <Link to="/about">About</Link>
  </nav>
);

export default NavBar;
