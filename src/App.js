import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import NavBar from "./common/Navbar";
import Table from "./component/table";
import Customer from "./component/Customer";
import Rental from "./component/Rental";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/customer" component={Customer} />
        <Route path="/rental" component={Rental} />
        <Route exact path="/" component={Table} />
      </Switch>
    </div>
  );
}

export default App;
