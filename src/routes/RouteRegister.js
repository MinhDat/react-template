import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import _ from "lodash";
import { BASE_DOMAIN } from "../../config";
import NotFoundPage from "../containers/NotFoundPage";
import RegisterPage from "../containers/RegisterPage";

import { domainRequest } from "../redux/actions";

// domainRequest();

class RouteRegister extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.domainRequest({ url: location.href });
  }

  _checkRegister() {
    return location.href.includes(BASE_DOMAIN);
  }

  render() {
    const { path, auth, component: RouteComponent, ...rest } = this.props;
    return !_.isUndefined(auth.domain) ? (
      !auth.domain.verify ? (
        path.length > 1 ? (
          <Route
            {...rest}
            render={props => (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: props.location }
                }}
              />
            )}
          />
        ) : this._checkRegister() ? (
          <Route component={RegisterPage} />
        ) : (
          <Route component={NotFoundPage} />
        )
      ) : (
        <Route
          {...rest}
          render={props =>
            !_.isEmpty(auth.authenication) ? (
              !path.includes("/login") ? (
                <RouteComponent {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: props.location }
                  }}
                />
              )
            ) : path.includes("/login") ? (
              <RouteComponent {...props} />
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
      )
    ) : null;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      domainRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteRegister);
