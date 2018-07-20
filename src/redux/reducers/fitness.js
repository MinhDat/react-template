import {
  CREATE_DOMAIN,
  CHECK_FITNESS_SUCCESS,
  CREATE_FITNESS_SUCCESS
} from "../actions/constants";

const initialDefault = {};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case CREATE_DOMAIN:
      return { ...state, ...action.payloads };
    case CHECK_FITNESS_SUCCESS:
      return { ...state, ...action.data };
    case CREATE_FITNESS_SUCCESS:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
