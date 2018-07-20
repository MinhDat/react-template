// WEBPACK CONFIGURATION BASE

// Import Webpack npm module
const path = require("path");

const SOURCE_DIR = path.dirname(__dirname);
const DEV_DIR = SOURCE_DIR + "/build";
const PROD_DIR = SOURCE_DIR + "/public";
const APP_DIR = SOURCE_DIR + "/src";

const { PRODUCTION_ENV } = require("../config");

const CSS_CONFIG_BASE = {
  fallback: "style-loader",
  use: [
    {
      loader: "css-loader",
      options: {
        modules: true, // export class name in css
        importLoaders: 1,
        localIdentName: "[local]" // Hash sass classname
      }
    },
    {
      loader: "sass-loader",
      options: {
        modules: true, // export class name in scss
        importLoaders: 1,
        localIdentName: "[local]" // Hash sass classname
      }
    },
    {
      loader: "postcss-loader",
      options: {
        path: SOURCE_DIR + "/config/postcss.config.js"
      }
    }
  ]
};

module.exports = {
  PRODUCTION_ENV,
  DEV_DIR,
  PROD_DIR,
  APP_DIR,
  CSS_CONFIG_BASE
};
