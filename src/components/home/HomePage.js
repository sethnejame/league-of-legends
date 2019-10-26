import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
      <h1>League of Legends</h1>
      <p>For all of your LoL stats needs.</p>
    <Link to="/about">About</Link>
  </div>
);

export default HomePage;
