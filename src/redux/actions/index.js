import auth from "./auth";
import menu from "./menu";
import user from "./user";
import fitness from "./fitness";
import alert from "./alert";
import account from "./account";

// console.log(auth);
module.exports = {
  // ...indexing,
  ...auth,
  ...menu,
  ...user,
  ...fitness,
  ...alert,
  ...account
};
