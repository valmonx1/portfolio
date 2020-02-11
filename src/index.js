import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./main/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
