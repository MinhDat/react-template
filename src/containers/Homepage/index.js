import React, { Component } from "react";
import styles from "./styles.scss";

class HomePage extends Component {
  render() {
    const { history } = this.props;
    return <div className={styles.HomePage}>Home</div>;
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default HomePage;
