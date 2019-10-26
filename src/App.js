import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import StatsPage from "./components/stats/StatsPage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";

const App = () => (
  <>
  <Header />
  <div className="container-fluid">
    <Route exact path="/" component={HomePage} />
    <Route path="/stats" component={StatsPage} />
    <Route path="/about" component={AboutPage} />
  </div>
  </>
);

export default App;
