import { HIDE_MENU, SHOW_MENU } from "./constants";

const hideMenu = payloads => ({ type: HIDE_MENU, payloads });
const showMenu = payloads => ({ type: SHOW_MENU, payloads });

module.exports = {
  hideMenu,
  showMenu
};
