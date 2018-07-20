import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Nav, NavItem, FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { logoutAction } from "../../../redux/actions";

import styles from "./styles.scss";

class RightHeader extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logoutAction();
  }
  render() {
    return (
      <header className={styles.RightHeader}>
        <Nav pullRight>
          <NavItem>
            <FormControl className={styles.Search} placeholder=" Search" />
          </NavItem>
          <NavItem className={styles.Dropdown}>
            <span
              data-toggle="dropdown"
              className="dropdown-toggle"
              aria-expanded="false"
            >
              <img
                alt=""
                className={styles.Avatar}
                src={require("../img/default-user-image.png")}
              />
              <span className="username">John Doe</span>
              <b className="caret" />
            </span>
            <ul className="dropdown-menu extended logout">
              <li>
                <i className="fa fa-suitcase" />Profile
              </li>
              <li>
                <i className="fa fa-cog" /> Settings
              </li>
              <li onClick={this.handleLogout}>
                <i className="fa fa-key" /> Log Out
              </li>
            </ul>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logoutAction
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(RightHeader);
