import React from "react";
import { Link } from "react-router-dom";

const StatsPage = () => (
  <div className="jumbotron">
    <h2>Stats</h2>
    <p>Below you can search for stats on your favorite LoL players.</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default StatsPage;
