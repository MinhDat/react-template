import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import _ from "lodash";

import { loginRequest } from "../../redux/actions";
import styles from "./styles.scss";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { auth, history } = nextProps;
    if (!_.isEmpty(auth)) {
      history.replace("/");
    }
    return false;
  }

  handleChangeEmail(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit() {
    if (
      this.state.username.trim().length > 0 &&
      this.state.password.trim().length > 0
    ) {
      // console.log(this.state);
      this.props.loginRequest(this.state);
    }
  }

  render() {
    // console.log(123456789);
    return (
      <Form className={styles.LoginForm}>
        <FormGroup>
          <ControlLabel htmlFor="inputEmail">Email address</ControlLabel>
          <FormControl
            type="email"
            id="inputEmail"
            placeholder="Email address"
            required
            onChange={this.handleChangeEmail}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel htmlFor="inputPassword">Password</ControlLabel>
          <FormControl
            type="password"
            id="inputPassword"
            placeholder="Password"
            required
            onChange={this.handleChangePassword}
          />
        </FormGroup>
        <div className="mb-3">
          <a href="#">Forget password</a>
        </div>
        <Button
          bsStyle="primary"
          bsSize="lg"
          className="btn-block"
          onClick={this.handleSubmit}
        >
          Sign in
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
