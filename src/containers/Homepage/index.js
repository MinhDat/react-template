import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";

class Homepage extends Component {
  render() {
    // console.log(styles);
    return (
      <div className="Homepage">
        <div className="text-center mb-4">
          <img
            className="mb-4"
            alt=""
            width="72"
            height="72"
            src={require("./img/default-user-image.png")}
          />
          <h1 className="h3 mb-3 font-weight-normal">Admin Login</h1>
        </div>
        <LoginForm />
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
      </div>
    );
  }
}

export default Homepage;
