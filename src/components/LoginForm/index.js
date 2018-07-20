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
  shouldComponentUpdate(nextProps, nextState) {
    const { auth, history } = nextProps;
    if (!_.isEmpty(auth)) {
      history.replace("/");
      return true;
    }
    return false;
  }

  handleSubmit = e => {
    this.props.loginRequest({
      username: e.target[0].value,
      password: e.target[1].value
    });
    e.preventDefault();
  };

  render() {
    // console.log(123456789);
    return (
      <Form className={styles.LoginForm} onSubmit={e => this.handleSubmit(e)}>
        <FormGroup>
          <ControlLabel htmlFor="username">Username</ControlLabel>
          <FormControl
            type="text"
            id="username"
            placeholder="Username or Email address"
            required
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <FormControl
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </FormGroup>
        <div className="mb-3">
          <a href="#">Forget password</a>
        </div>
        <Button
          bsStyle="primary"
          bsSize="lg"
          className="btn-block"
          type="submit"
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
