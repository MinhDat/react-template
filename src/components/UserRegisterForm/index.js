import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Col
} from "react-bootstrap";

import {
  MaxWidth,
  BtnPrimary,
  BtnBack,
  RegisterForm,
  HeadingForm,
  InputForm,
  ButtonForm
} from "../../main.scss";
import {
  checkAccountRequest,
  createFitnessRequest,
  createAccountRequest
} from "../../redux/actions";

class UserRegisterForm extends Component {
  shouldComponentUpdate(nextProps) {
    const {
      createFitnessRequest,
      createAccountRequest,
      handleShowSuccessNotice,
      fitness,
      account
    } = nextProps;
    if (account !== this.props.account) {
      createFitnessRequest(fitness);
      handleShowSuccessNotice();
    }
    if (fitness._id) {
      createAccountRequest({ ...account, fitness: fitness._id });
    }
    return false;
  }

  handleCreateAccount = e => {
    const { checkAccountRequest } = this.props;
    checkAccountRequest({
      username: e.target[0].value,
      password: e.target[1].value,
      fullname: e.target[3].value,
      // address: e.target[4].value,
      email: e.target[0].value,
      phone: e.target[5].value
    });
    e.preventDefault();
  };

  componentDidMount() {
    const { email, fullname, phone } = this.props.account;
    if (email) document.getElementById("emailInput").value = email;
    if (fullname) document.getElementById("fullnameInput").value = fullname;
    if (phone) document.getElementById("phoneInput").value = phone;
  }

  render() {
    return (
      <Form
        className={RegisterForm}
        onSubmit={e => this.handleCreateAccount(e)}
      >
        <div className={HeadingForm}>
          <h2>User Register</h2>
        </div>
        <div className={InputForm}>
          <Col xs={12} md={6}>
            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Email
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  id="emailInput"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Password
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  type="password"
                  id="passwordInput"
                  placeholder="Password"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Confirm
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  type="password"
                  id="confirmInput"
                  placeholder="Confirm"
                  required
                />
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Fullname
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  type="text"
                  placeholder="Fullname"
                  id="fullnameInput"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Address
              </Col>
              <Col xs={6} md={8}>
                <FormControl type="text" placeholder="Address" required />
              </Col>
            </FormGroup>

            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Phone
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  type="text"
                  placeholder="Phone"
                  id="phoneInput"
                  required
                />
              </Col>
            </FormGroup>
          </Col>
        </div>
        <Col xs={6} md={6}>
          <FormGroup className={ButtonForm}>
            <Button
              bsClass={`${BtnBack} btn-block`}
              bsStyle="primary"
              bsSize="lg"
              onClick={e => this.props.handleShowFitnessRegister()}
            >
              Previous
            </Button>
          </FormGroup>
        </Col>
        <Col xs={6} md={6}>
          <FormGroup className={ButtonForm}>
            <Button
              bsClass={`${BtnPrimary} btn-block`}
              bsStyle="primary"
              bsSize="lg"
              type="submit"
            >
              Register
            </Button>
          </FormGroup>
        </Col>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account,
    fitness: state.fitness,
    alert: state.alert
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkAccountRequest,
      createFitnessRequest,
      createAccountRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegisterForm);
