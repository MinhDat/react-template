import React, { Component } from "react";
import Alert from "../../components/Alert";

class AppWrapper extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="AppWrapper">
        <Alert />
        {this.props.children}
      </div>
    );
  }
}

export default AppWrapper;
