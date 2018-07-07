// WEBPACK CONFIGURATION BASE

// Import Webpack npm module
const path = require("path");

const SOURCE_DIR = path.dirname(__dirname);
const DEV_DIR = SOURCE_DIR + "/build";
const PROD_DIR = SOURCE_DIR + "/public";
const APP_DIR = SOURCE_DIR + "/src";

const isProd = process.env.NODE_ENV === "production";

const extendCSSConfig = {
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
    }
  ]
};

module.exports = { isProd, DEV_DIR, PROD_DIR, APP_DIR, extendCSSConfig };
