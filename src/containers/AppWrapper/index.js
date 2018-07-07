import React, { Component } from "react";

class AppWrapper extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="AppWrapper">
        <div className="container-fluid">{this.props.children}</div>
      </div>
    );
  }
}

export default AppWrapper;
