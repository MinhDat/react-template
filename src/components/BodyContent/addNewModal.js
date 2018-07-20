import React, { Component } from "react";
// import { connect } from "react-redux";
// import _ from "lodash";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col
} from "react-bootstrap";

import styles from "./styles.scss";
import { MaxWidth, pl0, pr0 } from "../../main.scss";

class AddNewModal extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal fade" id="NewUserModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add User</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <Form>
                <div className="modal-body">
                  <Grid>
                    <Row className={styles.rowInline}>
                      <Col xs={12} md={6} className={`${pl0} ${pr0}`}>
                        <FormGroup className={MaxWidth}>
                          <Col xs={12} md={4}>
                            <ControlLabel>Full Name</ControlLabel>
                          </Col>
                          <Col xs={12} md={8}>
                            <FormControl
                              type="text"
                              placeholder="Full Name"
                              required
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col xs={12} md={6} className={`${pl0} ${pr0}`}>
                        <FormGroup className={MaxWidth}>
                          <Col xs={12} md={4}>
                            <ControlLabel>Username</ControlLabel>
                          </Col>
                          <Col xs={12} md={8}>
                            <FormControl
                              type="text"
                              placeholder="Username"
                              required
                            />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col xs={12} md={6} className={`${pl0} ${pr0}`}>
                        <FormGroup className={MaxWidth}>
                          <Col xs={12} md={4}>
                            <ControlLabel>Email</ControlLabel>
                          </Col>
                          <Col xs={12} md={8}>
                            <FormControl
                              type="email"
                              placeholder="Email address"
                              required
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col xs={12} md={6} className={`${pl0} ${pr0}`}>
                        <FormGroup className={MaxWidth}>
                          <Col xs={12} md={4}>
                            <ControlLabel>Phone</ControlLabel>
                          </Col>
                          <Col xs={12} md={8}>
                            <FormControl
                              type="text"
                              placeholder="Phone number"
                              required
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col xs={12} md={6} className={`${pl0} ${pr0}`}>
                        <FormGroup className={MaxWidth}>
                          <Col xs={12} md={4}>
                            <ControlLabel>Avatar</ControlLabel>
                          </Col>
                          <Col xs={12} md={8}>
                            <FormControl
                              type="text"
                              placeholder="Avatar URL"
                              required
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                      <FormGroup className={MaxWidth}>
                        <Col xs={12} md={2}>
                          <ControlLabel>Address</ControlLabel>
                        </Col>
                        <Col xs={12} md={10}>
                          <address>address</address>
                        </Col>
                      </FormGroup>
                      <FormGroup className={MaxWidth}>
                        <Col xs={12} md={2}>
                          <ControlLabel>Password</ControlLabel>
                        </Col>
                        <Col xs={12} md={8}>
                          <FormControl
                            type="password"
                            placeholder="Password"
                            required
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className={MaxWidth}>
                        <Col xs={12} md={2}>
                          <ControlLabel>Confirm</ControlLabel>
                        </Col>
                        <Col xs={12} md={8}>
                          <FormControl
                            type="password"
                            placeholder="Confirm password"
                            required
                          />
                        </Col>
                      </FormGroup>
                    </Row>
                  </Grid>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewModal;
