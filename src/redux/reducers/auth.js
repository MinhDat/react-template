import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      // console.log(action);
      return action;
    default:
      return state;
  }
}
