import React, { Component } from "react";
import styles from "./styles.scss";

class MenuLeft extends Component {
  render() {
    return (
      <div
        className={styles.SideBarLeft}
        style={{ marginLeft: this.props.sbMaginLeft }}
      >
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-dashboard" />
              <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-user-plus" />
              <span>Register</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuLeft;
