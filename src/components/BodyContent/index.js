import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Table, Button } from "react-bootstrap";
import AddNewModal from "./addNewModal";

import styles from "./styles.scss";

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countUsers: 0,
      headerData: [],
      dataExcept: ["verified", "update"]
    };
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleCheckItem = this.handleCheckItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.menu !== this.props.menu) {
      this._actionMenu();
    }
    if (nextProps.users !== this.props.users) {
      this._getHeaderData(nextProps.users[0], "user");
    }
    if (nextState.headerData !== this.state.headerData) {
      return true;
    }
    return false;
  }

  handleCheckAll(e) {
    if (e.target.checked) {
      this.setState({
        countUsers: this.props.users.length
      });
    } else {
      this.setState({
        countUsers: 0
      });
    }
    this._checkAllItem();
  }

  handleCheckItem(e) {
    let { countUsers } = this.state;
    const amountUsers = this.props.users.length;
    if (e.target.checked) {
      countUsers++;
    } else {
      countUsers--;
    }
    this.setState({
      countUsers: countUsers
    });

    let checkAllFlag = this._getCheckBoxInput("checkAll");
    if (checkAllFlag.checked && countUsers < amountUsers) {
      checkAllFlag.checked = false;
    }
    if (!checkAllFlag.checked && countUsers === amountUsers) {
      checkAllFlag.checked = true;
    }
  }

  render() {
    return (
      <div className={styles.BodyContent} style={{ paddingLeft: "240px" }}>
        <div className={styles.Wrapper}>
          <div className={styles.PanelHeading}>Users</div>
          <div className={styles.Panel}>
            <div className={styles.btnGroup}>
              <Button
                className={styles.btnPrimary}
                data-toggle="modal"
                data-target="#NewUserModal"
              >
                Create <i className="fa fa-plus" />
              </Button>
              <Button className={styles.btnPrimary}>
                Edit <i className="fa fa-edit" />
              </Button>
              <Button className={styles.btnPrimary}>
                Delete <i className="fa fa-trash" />
              </Button>
            </div>
            <div className={styles.PanelBody}>{this._renderDataTable()}</div>
          </div>
        </div>
        <AddNewModal />
      </div>
    );
  }

  _renderDataTable() {
    return (
      <Table responsive>
        <thead>{this._mapHeaderData()}</thead>
        <tbody>{this._mapBodyData(this.props.users)}</tbody>
      </Table>
    );
  }

  _mapHeaderData() {
    return (
      <tr>
        <th>
          <input
            type="checkbox"
            className="checkAll"
            onClick={this.handleCheckAll}
          />
        </th>
        {this.state.headerData.map((header, index) => (
          <th key={header + index}>{header}</th>
        ))}
        {this.state.dataExcept.map((header, index) => (
          <th key={header + index}>{header}</th>
        ))}
      </tr>
    );
  }

  _mapBodyData(data) {
    return data.map((user, index) => (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            className={`check-${index}`}
            onClick={this.handleCheckItem}
          />
        </td>
        {this.state.headerData.map((header, index) => (
          <td key={user[header] + index}>
            {header === "verified"
              ? user[header]
                ? "true"
                : "false"
              : user[header]}
          </td>
        ))}
        <td key={user["verified"] + index}>
          {user["verified"] ? "true" : "false"}
        </td>
        <td key={user["update"] + index}>
          Update at {user["update"].slice(-1)[0].time} by{" "}
          {user["update"].slice(-1)[0].updateBy}
        </td>
      </tr>
    ));
  }

  _actionMenu() {
    let element = document.getElementsByClassName(styles.BodyContent);
    let sbPaddingLeft = element[0].style.paddingLeft;
    if (sbPaddingLeft === "0px") {
      element[0].style.paddingLeft = "240px";
    } else {
      element[0].style.paddingLeft = "0px";
    }
  }

  _getCheckBoxInput(className) {
    return document.getElementsByClassName(className)[0];
  }

  _checkAllItem() {
    let flag = this._getCheckBoxInput("checkAll").checked;
    for (let i = 0; i < this.props.users.length; i++) {
      let checkElement = this._getCheckBoxInput(`check-${i}`);
      if (checkElement.checked === !flag) {
        checkElement.checked = flag;
      }
    }
  }

  _getHeaderData(data, type) {
    const tHeader = [];
    const except = this.state.dataExcept;
    for (let property in data) {
      if (except.indexOf(property) < 0) {
        tHeader.push(property);
      }
    }
    this.setState({ headerData: tHeader });
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

export default connect(mapStateToProps)(BodyContent);
