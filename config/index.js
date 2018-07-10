const configVariable = require("./config.json");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  configVariable,
  isProduction
};
