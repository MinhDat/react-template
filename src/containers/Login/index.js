import React, { Component } from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.css";

class Signin extends Component {
  render() {
    // console.log(styles);
    return (
      <Form className={styles.login}>
        <div className="text-center mb-4">
          <img className="mb-4" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
          <p>
            Build form controls with floating labels via the{" "}
            <code>:placeholder-shown</code> pseudo-element.{" "}
            <a href="https://caniuse.com/#feat=css-placeholder-shown">
              Works in latest Chrome, Safari, and Firefox.
            </a>
          </p>
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <label for="inputPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
      </Form>
    );
  }
}

export default Signin;
