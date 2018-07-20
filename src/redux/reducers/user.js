import { USERS_LIST_SUCCESS } from "../actions/constants";

const initialDefault = [];

export default function(state = initialDefault, action) {
  switch (action.type) {
    case USERS_LIST_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
