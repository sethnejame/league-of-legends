import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import StatsPage from "./components/stats/StatsPage";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/common/Header";

const App = () => (
  <>
    <Header />
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/stats" component={StatsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </>
);

export default App;
