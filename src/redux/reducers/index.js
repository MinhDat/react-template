import { combineReducers } from "redux";

import auth from "./auth";
import menu from "./menu";
import users from "./user";
import fitness from "./fitness";
import alert from "./alert";
import account from "./account";

const rootReducer = combineReducers({
  auth,
  menu,
  users,
  fitness,
  alert,
  account
});

export default rootReducer;
