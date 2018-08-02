import { combineReducers } from "redux";

import auth from "./auth";
import menu from "./menu";
import users from "./user";
import fitnesses from "./fitness";
import alert from "./alert";
import account from "./account";
import address from "./address";

const rootReducer = combineReducers({
  auth,
  menu,
  users,
  fitnesses,
  alert,
  account,
  address
});

export default rootReducer;
