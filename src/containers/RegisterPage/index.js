import React, { Component } from "react";
import WorkSpaceForm from "../../components/WorkSpaceForm";
import UserRegisterForm from "../../components/UserRegisterForm";
import FitnessRegisterForm from "../../components/FitnessRegisterForm";

import styles from "./styles.scss";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWorkSpace: true,
      showFitnessRegister: false,
      showUserRegister: false,
      showSuccessNotice: false
    };
  }

  handleShowWorkSpace = () => {
    this.setState({
      showWorkSpace: true,
      showFitnessRegister: false
    });
  };

  handleShowFitnessRegister = () => {
    this.setState({
      showWorkSpace: false,
      showFitnessRegister: true,
      showUserRegister: false
    });
  };

  handleShowUserRegister = () => {
    this.setState({
      showFitnessRegister: false,
      showUserRegister: true,
      showSuccessNotice: false
    });
  };

  handleShowSuccessNotice = () => {
    this.setState({
      showSuccessNotice: true
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("props", this.props);
    if (nextState.showSuccessNotice) {
      let wrapper = document.getElementsByClassName("SuccessNotice");
      let el = wrapper.firstChild;
      swal({
        text: "Success!!",
        content: el,
        icon: "success"
      }).then(() => {
        window.location.href = "/";
      });
      return false;
    }
    return true;
  }

  render() {
    const { showFitnessRegister, showWorkSpace, showUserRegister } = this.state;
    return (
      <div className={styles.RegisterPage}>
        <div className={styles.SuccessNotice} />
        {showWorkSpace ? (
          <WorkSpaceForm
            handleShowFitnessRegister={this.handleShowFitnessRegister}
          />
        ) : null}
        {showFitnessRegister ? (
          <FitnessRegisterForm
            handleShowWorkSpace={this.handleShowWorkSpace}
            handleShowUserRegister={this.handleShowUserRegister}
          />
        ) : null}
        {showUserRegister ? (
          <UserRegisterForm
            handleShowFitnessRegister={this.handleShowFitnessRegister}
            handleShowSuccessNotice={this.handleShowSuccessNotice}
          />
        ) : null}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default RegisterPage;
