import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { hideMenu, showMenu } from "../../../redux/actions";

import styles from "./styles.scss";

class LeftHeader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  handleClick() {
    const { menu, hideMenu, showMenu } = this.props;
    if (menu.visible) {
      hideMenu();
    } else {
      showMenu();
    }
    // this.props.handleOpenSlideBar();
  }
  render() {
    return (
      <header className={styles.LeftHeader}>
        <div className={styles.BrandName}>
          <a href="#">
            <b>Wefit administrator</b>
          </a>
        </div>
        <div className={styles.SidebarToggleBox}>
          <div className={styles.faBars} onClick={this.handleClick}>
            <span className="fa fa-bars" />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideMenu,
      showMenu
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftHeader);
