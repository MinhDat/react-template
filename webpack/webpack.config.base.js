// WEBPACK CONFIGURATION BASE

// Import Webpack npm module
const path = require("path");

const SOURCE_DIR = path.dirname(__dirname);
const DEV_DIR = SOURCE_DIR + "/build";
const PROD_DIR = SOURCE_DIR + "/public";
const SSR_DIR = SOURCE_DIR + "/dist";
const SERVER_DIR = SOURCE_DIR + "/server";
const APP_DIR = SOURCE_DIR + "/src";

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

const HTML_WEBPACK_OPTION_BASE = {
  title: "Ha Minh Dat's curriculum vitae",
  hash: true, // Hash css/js bundle
  template: APP_DIR + "/index.html",
  favicon: APP_DIR + "/owl.ico"
};

module.exports = {
  DEV_DIR,
  PROD_DIR,
  SSR_DIR,
  APP_DIR,
  SERVER_DIR,
  CSS_CONFIG_BASE,
  HTML_WEBPACK_OPTION_BASE
};
