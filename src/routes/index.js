import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRote";

import Homepage from "../containers/Homepage";
import Dashboard from "../containers/Dashboard";
// import Logout from "../containers/Logout";

export default () => {
  // console.log(123);
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/logout" component={Logout} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/login" component={Homepage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};
