import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components";
import { Api } from "./components";
import { Navbar } from "./components";

let myTitle = "Andy's Phone Book";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home title={myTitle} />
        </Route>
        <Api />
        <Navbar />
      </Switch>
    </Router>
  </React.StrictMode>
);
