import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const loginRequest = payload => ({ type: LOGIN_REQUEST, payload });

module.exports = {
  loginRequest
};
