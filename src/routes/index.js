import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteRegister from "./RouteRegister";

import Homepage from "../containers/Homepage";
import Dashboard from "../containers/Dashboard";
// import Logout from "../containers/Logout";

export default () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/logout" component={Logout} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        <RouteRegister exact path="/login" component={Homepage} />
        <RouteRegister path="/dashboard" component={Dashboard} />
        <RouteRegister path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};
