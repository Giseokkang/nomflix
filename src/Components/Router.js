import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="nomflix/" exact component={Home} />
        <Route path="nomflix/tv" component={TV} />
        <Route path="nomflix/search" component={Search} />
        <Redirect from="#" to="/" />
        <Route path="nomflix/movie/:id" component={Detail} />
        <Route path="nomflix/show/:id" component={Detail} />
      </Switch>
    </>
  </Router>
);
