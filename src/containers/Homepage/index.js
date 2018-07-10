import React, { Component } from "react";

import LoginForm from "../../components/LoginForm";
import styles from "./styles.scss";

class HomePage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.HomePage}>
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
        <LoginForm history={history} />
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default HomePage;
