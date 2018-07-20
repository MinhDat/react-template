import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Col,
  HelpBlock
} from "react-bootstrap";
import Select from "react-select";
// import "react-select/dist/react-select.css";

import {
  MaxWidth,
  BtnPrimary,
  BtnBack,
  RegisterForm,
  HeadingForm,
  InputForm,
  ButtonForm
} from "../../main.scss";

import { checkFitnessRequest } from "../../redux/actions";

const FLAVOURS = [
  { label: "parking", value: "parking" },
  { label: "steam room", value: "steam room" },
  { label: "boxing", value: "boxing" },
  { label: "carpet", value: "carpet" },
  { label: "personal trainer", value: "personal trainer" },
  { label: "closet", value: "closet" },
  { label: "exercise towel", value: "exercise towel" },
  { label: "nutritious drinks", value: "nutritious drinks" },
  { label: "bathroom", value: "bathroom" }
];

class FitnessRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      value: [],
      rtl: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) return true;
    if (nextProps.fitness !== this.props.fitness) {
      this.props.handleShowUserRegister();
    }
    return false;
  }

  handleSelectChange = value => {
    // console.log("value", value);
    this.setState({ value: value.split(",") });
  };

  handleCreateFitness = e => {
    this.props.checkFitnessRequest({
      name: e.target[0].value,
      email: e.target[1].value,
      utilities: this.state.value,
      // address: e.target[3].value,
      phone: e.target[4].value
    });
    e.preventDefault();
  };

  componentDidMount() {
    const { email, name, phone } = this.props.fitness;
    if (email) document.getElementById("emailInput").value = email;
    if (name) document.getElementById("nameInput").value = name;
    if (phone) document.getElementById("phoneInput").value = phone;
  }

  render() {
    const { disabled, stayOpen, value } = this.state;
    const options = FLAVOURS;
    return (
      <Form
        className={RegisterForm}
        onSubmit={e => this.handleCreateFitness(e)}
      >
        <div className={HeadingForm}>
          <h2>Fitness Register</h2>
        </div>
        <div className={InputForm}>
          <Col xs={12} md={6}>
            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Fitness name
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  id="nameInput"
                  type="text"
                  placeholder="Fitness name"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Fitness email
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  id="emailInput"
                  type="email"
                  placeholder="Fitness email"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Utilities
              </Col>
              <Col xs={6} md={8}>
                <Select
                  closeOnSelect={!stayOpen}
                  disabled={disabled}
                  multi
                  onChange={e => this.handleSelectChange(e)}
                  options={options}
                  placeholder="Select your utilities"
                  removeSelected={this.state.removeSelected}
                  rtl={this.state.rtl}
                  simpleValue
                  value={value}
                  required
                />
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Fitness address
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  id="addressInput"
                  type="text"
                  placeholder="Fitness address"
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup className={MaxWidth}>
              <Col componentClass={ControlLabel} xs={6} md={4}>
                Fitness phone
              </Col>
              <Col xs={6} md={8}>
                <FormControl
                  type="text"
                  placeholder="Fitness phone"
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
              onClick={e => this.props.handleShowWorkSpace()}
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
              Next
            </Button>
          </FormGroup>
        </Col>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { fitness: state.fitness, alert: state.alert };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkFitnessRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FitnessRegisterForm);
