import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import styles from "./styles.scss";

class LoginForm extends Component {
  render() {
    // console.log(styles);
    return (
      <Form className={styles.LoginForm}>
        <FormGroup>
          <ControlLabel htmlFor="inputEmail">Email address</ControlLabel>
          <FormControl
            type="email"
            id="inputEmail"
            placeholder="Email address"
            required
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel htmlFor="inputPassword">Password</ControlLabel>
          <FormControl
            type="password"
            id="inputPassword"
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

export default LoginForm;
