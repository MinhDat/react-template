import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./styles.scss";

class Menu extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.menu !== this.props.menu) {
      return this._actionNoRender();
    }
    return true;
  }

  render() {
    return (
      <div className={styles.Menu} style={{ marginLeft: "0px" }}>
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

  _actionNoRender() {
    let element = document.getElementsByClassName(styles.Menu);
    let sbMarginLeft = element[0].style.marginLeft;
    if (sbMarginLeft === "0px") {
      element[0].style.marginLeft = "-240px";
    } else {
      element[0].style.marginLeft = "0px";
    }
    return false;
  }
}
const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

export default connect(mapStateToProps)(Menu);
