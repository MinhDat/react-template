import { USERS_LIST_SUCCESS } from "../actions/constants";
import { parseDateTimeEnUS } from "../../utils";

const initialDefault = {};

export default function(state = initialDefault, action) {
  switch (action.type) {
    case USERS_LIST_SUCCESS:
      const data = action.data.data.map(item => ({
        ...item,
        update: item.update.map(u => ({
          ...u,
          time: parseDateTimeEnUS(u.time)
        })),
        lastupdate: `${parseDateTimeEnUS(item.update.slice(-1)[0].time)} ${
          item.update.slice(-1)[0].updateBy
        }`,
        fitness: item.fitness.name,
        lastLogonTime: parseDateTimeEnUS(item.lastLogonTime),
        createdAt: parseDateTimeEnUS(item.createdAt),
        verified: item.verified ? "true" : "false"
      }));
      // console.log("data", data);
      return { ...state, ...{ ...action.data, data } };
    default:
      return state;
  }
}
