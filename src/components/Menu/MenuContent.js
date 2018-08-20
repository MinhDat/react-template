import React, { Component } from "react";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

const { SUB_DOMAIN } = require("../../../config");

class MenuContent extends Component {
  render() {
    return (
      <div className={styles.MenuContent}>
        <Link
          className={`${styles.Item} ${styles.ItemHome}`}
          to={`${SUB_DOMAIN}/`}
        >
          Home
        </Link>
        <a
          className={`${styles.Item} ${styles.ItemAboutMe}`}
          href="https://night-owl-squad.herokuapp.com/"
        >
          About me
        </a>
        <a
          className={`${styles.Item} ${styles.ItemProject}`}
          href="https://github.com/MinhDat?tab=repositories"
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
