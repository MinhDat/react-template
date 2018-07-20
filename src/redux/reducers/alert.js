import { HIDE_ALERT, SHOW_ALERT } from "../actions/constants";

const initialDefault = {
  visible: false,
  message: "error"
};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        visible: true,
        message: action.payloads.message
      };
    case HIDE_ALERT:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
}
