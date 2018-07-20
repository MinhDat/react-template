import { HIDE_MENU, SHOW_MENU } from "../actions/constants";

const initialDefault = {
  visible: true
};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case SHOW_MENU:
      return {
        visible: true
      };
    case HIDE_MENU:
      return {
        visible: false
      };
    default:
      return state;
  }
}
