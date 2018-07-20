import { SHOW_ALERT, HIDE_ALERT } from "./constants";

const hideAlert = payloads => ({ type: HIDE_ALERT, payloads });
const showAlert = payloads => ({ type: SHOW_ALERT, payloads });

module.exports = {
  hideAlert,
  showAlert
};
