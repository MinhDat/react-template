import { ADDRESS_SUCCESS } from "../actions/constants";

const initialDefault = [];

export default function(state = initialDefault, action) {
  switch (action.type) {
    case ADDRESS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
