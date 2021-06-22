import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Content from "../Router/layout/Content";
import Header from "../Router/layout/header";

const AppRouter = () => {
 return (
  <Router>
   <Route path="/" component={Header}></Route>
   <Route path="/" component={Content}></Route>
  </Router>
 );
};

export default AppRouter;
