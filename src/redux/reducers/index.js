import { combineReducers } from "redux";

import auth from "./auth";
import menu from "./menu";
import alert from "./alert";
import address from "./address";

const rootReducer = combineReducers({
  auth,
  menu,
  alert,
  address
});

export default rootReducer;
