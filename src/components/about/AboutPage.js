import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="jumbotron">
    <h2>About</h2>
    <p>
      This site was made using create-react-app and relies on bootstrap for
      styling. All information on this site is courtesy of the
      <Link to="https://developer.riotgames.com/">Riot Games API.</Link>
    </p>
    <Link to="/">Go Home</Link>
  </div>
);

export default AboutPage;
