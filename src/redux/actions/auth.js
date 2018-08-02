import {
  LOGIN_REQUEST,
  LOGOUT_ACTION,
  DOMAIN_REQUEST,
  CHECK_DOMAIN_REQUEST,
  ADDRESS_REQUEST
} from "./constants";

const loginRequest = payloads => ({ type: LOGIN_REQUEST, payloads });
const logoutAction = () => ({ type: LOGOUT_ACTION });

const domainRequest = payloads => ({ type: DOMAIN_REQUEST, payloads });
const addressRequest = payloads => ({
  type: ADDRESS_REQUEST,
  payloads
});
const checkDomainRequest = payloads => ({
  type: CHECK_DOMAIN_REQUEST,
  payloads
});

module.exports = {
  loginRequest,
  logoutAction,
  domainRequest,
  addressRequest,
  checkDomainRequest
};
