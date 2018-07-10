import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/actionTypes";

const initialDefault = {};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.bearer;
    default:
      return state;
  }
}
