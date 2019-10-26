import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";

const App = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/stats" component={StatsPage} />
    <Route path="/about" component={AboutPage} />
  </>
);

export default App;
