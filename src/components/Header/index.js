import React, { Component } from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import styles from "./styles.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <LeftHeader />
        <RightHeader />
      </div>
    );
  }
}

export default Header;
