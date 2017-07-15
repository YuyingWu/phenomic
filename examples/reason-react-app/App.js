import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";

import {
  createApp,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

const {
  wrapReComponent
} = require("@phenomic/reason/lib/js/src/phenomicRootComponent");
const Home = require("./lib/js/components/Home");

export default createApp(() =>
  <Router history={browserHistory}>
    <Route
      path="/"
      component={wrapReComponent(Home.jsComponent, Home.queries)}
    />
  </Router>
);
