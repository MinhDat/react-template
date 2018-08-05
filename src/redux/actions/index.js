import auth from "./auth";
import menu from "./menu";
import alert from "./alert";

// console.log(auth);
module.exports = {
  // ...indexing,
  ...auth,
  ...menu,
  ...alert
};
