import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormControl
} from "react-bootstrap";
import MenuLeft from "./MenuLeft";
import styles from "./styles.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sbMaginLeft: "0"
    };
    this.handleOpenSlideBar = this.handleOpenSlideBar.bind(this);
  }
  handleOpenSlideBar() {
    if (this.state.sbMaginLeft === "0") {
      this.setState({
        sbMaginLeft: "-240px"
      });
    } else {
      this.setState({
        sbMaginLeft: "0"
      });
    }
  }
  render() {
    return (
      <div className="Header">
        <header className={styles.LeftHeader}>
          <div className={styles.BrandName}>
            <a href="#">
              <b>Wefit adminstrator</b>
            </a>
          </div>
          <div className={styles.SidebarToggleBox}>
            <div className="fa fa-bars" onClick={this.handleOpenSlideBar} />
          </div>
        </header>
        <div className={styles.RightHeader}>
          <Nav pullRight>
            <NavItem>
              <FormControl className={styles.Search} placeholder=" Search" />
            </NavItem>
            <li className="Dropdown">
              <a
                data-toggle="dropdown"
                className="dropdown-toggle"
                href="#"
                aria-expanded="false"
              >
                <img
                  alt=""
                  className={styles.Avatar}
                  src={require("./img/default-user-image.png")}
                />
                <span className="username">John Doe</span>
                <b className="caret" />
              </a>
              <ul className="dropdown-menu extended logout">
                <li>
                  <a href="#">
                    <i className=" fa fa-suitcase" />Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" /> Settings
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-key" /> Log Out
                  </a>
                </li>
              </ul>
            </li>
          </Nav>
        </div>
        <MenuLeft sbMaginLeft={this.state.sbMaginLeft} />
      </div>
    );
  }
}

export default Header;
