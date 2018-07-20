import { LOGIN_REQUEST, LOGOUT_ACTION, DOMAIN_REQUEST } from "./constants";

const loginRequest = payloads => ({ type: LOGIN_REQUEST, payloads });
const logoutAction = () => ({ type: LOGOUT_ACTION });

const domainRequest = payloads => ({ type: DOMAIN_REQUEST, payloads });

module.exports = {
  loginRequest,
  logoutAction,
  domainRequest
};
