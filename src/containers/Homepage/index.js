import React, { Component } from "react";
import Loadable from "react-loadable";
import styles from "./styles.scss";

const Header = Loadable({
  loader: () => import("../../components/Header"),
  loading: () => <div />
});

class HomePage extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.HomePage}>
        <Header />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default HomePage;
