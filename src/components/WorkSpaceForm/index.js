import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BASE_DOMAIN } from "../../../config";

import { WorkSpaceForm, Domain } from "./styles.scss";
import {
  MaxWidth,
  BtnPrimary,
  HeadingForm,
  InputForm,
  ButtonForm
} from "../../main.scss";
import { createDomain, showAlert } from "../../redux/actions";

class WorkSpace extends Component {
  componentDidMount() {
    const { domain } = this.props.fitness;
    const baseDomain = `.${BASE_DOMAIN}`;
    if (domain && domain.trim().length > 0) {
      document.getElementById("domainInput").value = domain.split(
        baseDomain
      )[0];
    }
  }
  handleCreateDomain = e => {
    const {
      auth,
      createDomain,
      handleShowFitnessRegister,
      showAlert
    } = this.props;
    const baseDomain = `.${BASE_DOMAIN}`;
    if (!auth.domain.includes(e.target[0].value.trim() + baseDomain)) {
      createDomain({
        domain: e.target[0].value + `.${BASE_DOMAIN}`
      });
      handleShowFitnessRegister();
    } else {
      showAlert({ message: "workspace name existed!!" });
    }
    e.preventDefault();
  };
  render() {
    // console.log(this.props);
    return (
      <Form
        className={WorkSpaceForm}
        onSubmit={e => this.handleCreateDomain(e)}
      >
        <div className={HeadingForm}>
          <h2>WorkSpace Register</h2>
        </div>
        <div className={InputForm}>
          <FormGroup className={MaxWidth}>
            <Col xs={6} md={8}>
              <FormControl
                id="domainInput"
                type="text"
                placeholder="Workspace name"
                required
              />
            </Col>
            <Col xs={6} md={4} className={Domain}>
              .wefit.com
            </Col>
          </FormGroup>
        </div>
        <FormGroup className={ButtonForm}>
          <Button
            bsClass={`${BtnPrimary} btn-block`}
            bsStyle="primary"
            bsSize="lg"
            type="submit"
          >
            Continue
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  const { auth, fitness } = state;
  return { auth, fitness };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createDomain,
      showAlert
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkSpace);
