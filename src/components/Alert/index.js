import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SweatAlertContain } from "./styles.scss";

import { hideAlert } from "../../redux/actions";
import swal from "sweetalert";

class Alert extends Component {
  componentDidUpdate() {
    const { alert, hideAlert } = this.props;
    if (alert.visible) {
      let wrapper = document.getElementsByClassName(SweatAlertContain);
      let el = wrapper.firstChild;
      swal({
        text: alert.message,
        content: el,
        icon: "error"
      }).then(() => {
        hideAlert();
      });
    }
  }
  render() {
    return <div className={SweatAlertContain} />;
  }
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideAlert
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
