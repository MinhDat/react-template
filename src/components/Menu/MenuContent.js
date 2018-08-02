import React, { Component } from "react";
import styles from "./styles.scss";

class MenuContent extends Component {
  render() {
    return (
      <div className={styles.MenuContent}>
        <a
          className={`${styles.Item} ${styles.ItemHome}`}
          href="/react-template/"
        >
          Home
        </a>
        <a
          className={`${styles.Item} ${styles.ItemAboutMe}`}
          href="/react-template/about-me"
        >
          About me
        </a>
        <a
          className={`${styles.Item} ${styles.ItemProject}`}
          href="/react-template/projects"
        >
          Projects
        </a>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default MenuContent;
