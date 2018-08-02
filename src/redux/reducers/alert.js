import { HIDE_ALERT, SHOW_ALERT } from "../actions/constants";

const initialDefault = {
  visible: false,
  message: "error",
  type: "error"
};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
        ...action.payloads
      };
    case HIDE_ALERT:
      return {
        ...state,
        visible: false,
        ...action.payloads
      };
    default:
      return state;
  }
}
