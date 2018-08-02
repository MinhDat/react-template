import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loadable from "react-loadable";

// import _ from "lodash";
// import styles from "./styles.scss";

const Menu = Loadable({
  loader: () => import("../../components/Menu"),
  loading: () => <div>Loading...</div>
});

class AppWrapper extends Component {
  render() {
    return (
      <div className="AppWrapper">
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(AppWrapper);
