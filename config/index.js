const fs = require("fs");
const path = require("path");
const rootPath = __dirname;
const configVariable = JSON.parse(
  fs.readFileSync(path.join(rootPath, "config.json"), "utf8")
);

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  configVariable,
  isProduction
};
