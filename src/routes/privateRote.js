import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !_.isEmpty(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(PrivateRoute);
