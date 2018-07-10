import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

// render={props =>
//   !_.isEmpty(auth) ? (
//     <Component {...props} />
//   ) : (
//     <Redirect
//       to={{
//         pathname: "/login",
//         state: { from: props.location }
//       }}
//     />
//   )
// }
const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  // const { authenication } = auth;
  return <Route {...rest} render={props => <Component {...props} />} />;
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(PrivateRoute);
