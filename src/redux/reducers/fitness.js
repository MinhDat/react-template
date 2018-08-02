import {
  CREATE_DOMAIN,
  CHECK_FITNESS_SUCCESS,
  CREATE_FITNESS_SUCCESS,
  FITNESSES_LIST_SUCCESS
} from "../actions/constants";
import { parseDateTimeEnUS } from "../../utils";

const initialDefault = {};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case CREATE_DOMAIN:
      return { ...state, ...action.payloads };
    case CHECK_FITNESS_SUCCESS:
      return { ...state, ...action.data };
    case CREATE_FITNESS_SUCCESS:
      return { ...state, ...action.data };
    case FITNESSES_LIST_SUCCESS:
      const data = action.data.data.map(item => ({
        ...item,
        createdAt: parseDateTimeEnUS(item.createdAt),
        verified: item.verified ? "true" : "false",
        utilities: item.utilities.toString(),
        update: item.update.map(u => ({
          ...u,
          time: parseDateTimeEnUS(u.time)
        }))
      }));
      return { ...state, ...{ ...action.data, data } };
    default:
      return state;
  }
}
