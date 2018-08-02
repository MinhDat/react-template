import React, { Component } from "react";
import styles from "./styles.scss";

class LogoBottom extends Component {
  render() {
    return (
      <div className={styles.LogoBottom}>
        <a href="/react-template/" className={styles.TextLogo}>
          Ha Minh Dat's Information
        </a>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default LogoBottom;
