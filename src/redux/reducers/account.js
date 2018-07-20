import { CHECK_ACCOUNT_SUCCESS } from "../actions/constants";

const initialDefault = {};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case CHECK_ACCOUNT_SUCCESS:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
