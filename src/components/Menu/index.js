import React, { Component } from "react";
import styles from "./styles.scss";
import Loadable from "react-loadable";

const MenuHamburger = Loadable({
  loader: () => import("./MenuHamburger"),
  loading: () => <div />
});

const LogoBottom = Loadable({
  loader: () => import("./LogoBottom"),
  loading: () => <div />
});

const MenuContent = Loadable({
  loader: () => import("./MenuContent"),
  loading: () => <div />
});

class Menu extends Component {
  render() {
    return (
      <div className={styles.General}>
        <div className={styles.Menu}>
          <div className={styles.LargeScreen}>
            <MenuHamburger />
            <LogoBottom />
          </div>
        </div>
        <MenuContent />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default Menu;
