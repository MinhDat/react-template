import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const loginRequest = payloads => ({ type: LOGIN_REQUEST, payloads });

module.exports = {
  loginRequest
};
