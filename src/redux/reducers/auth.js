import {
  LOGIN_SUCCESS,
  LOGOUT_ACTION,
  DOMAIN_SUCCESS
} from "../actions/constants";

const authenication = localStorage.getItem("authenication");
const initialDefault = authenication ? { authenication } : {};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenication: action.data };
    case DOMAIN_SUCCESS:
      return { ...state, domain: action.data };
    case LOGOUT_ACTION:
      localStorage.removeItem("authenication");
      return { ...state, authenication: {} };
    default:
      return state;
  }
}
