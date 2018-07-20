import { CHECK_ACCOUNT_REQUEST, CREATE_ACCOUNT_REQUEST } from "./constants";

const checkAccountRequest = payloads => ({
  type: CHECK_ACCOUNT_REQUEST,
  payloads
});

const createAccountRequest = payloads => ({
  type: CREATE_ACCOUNT_REQUEST,
  payloads
});

module.exports = {
  checkAccountRequest,
  createAccountRequest
};
