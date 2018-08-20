import React from "react";
import Loadable from "react-loadable";
import { Switch, Route } from "react-router-dom";
import { SUB_DOMAIN } from "../../config";

const Loading = () => <div>Loading...</div>;

const Homepage = Loadable({
  loader: () => import("../containers/Homepage"),
  loading: Loading
});

export default () => {
  return (
    <Switch>
      {/* <RouteRegister exact path="/login" component={Homepage} />
      <RouteRegister path="/dashboard" component={Dashboard} />
      <RouteRegister path="/user" component={UserPage} />
      <RouteRegister path="/all-users" component={UsersManagement} />
      <RouteRegister path="/fitness" component={FitnessPage} />
      <RouteRegister path="/notfound" component={NotFoundPage} />
      <RouteRegister path="/noverified" component={NoVerifiedPage} />
      <RouteRegister path="/" component={Dashboard} /> */}
      <Route path={`${SUB_DOMAIN}/`} component={Homepage} />
      {/* <Route path="/react-template/" component={Homepage} /> */}
    </Switch>
  );
};
