import { USERS_LIST_REQUEST } from "./constants";

const usersListRequest = payloads => ({ type: USERS_LIST_REQUEST, payloads });

module.exports = {
  usersListRequest
};
