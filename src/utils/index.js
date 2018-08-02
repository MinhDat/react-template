import moment from "moment";
module.exports = {
  parseDateTimeEnUS: stringDateTime =>
    moment(stringDateTime).format("DD/MM/YYYY HH:mm")
};
