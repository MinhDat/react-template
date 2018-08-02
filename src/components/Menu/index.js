import React, { Component } from "react";
import styles from "./styles.scss";
import Loadable from "react-loadable";

const MenuHamber = Loadable({
  loader: () => import("./MenuHamber"),
  loading: () => <div>Loading...</div>
});

const LogoBottom = Loadable({
  loader: () => import("./LogoBottom"),
  loading: () => <div>Loading...</div>
});

class Menu extends Component {
  render() {
    return (
      <div className={styles.Menu}>
        <div className={styles.LargeScreen}>
          <MenuHamber />
          <LogoBottom />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default Menu;
