// WEBPACK CONFIGURATION DEVELOPMENT

const {
  APP_DIR,
  CSS_CONFIG_BASE,
  HTML_WEBPACK_OPTION_BASE
} = require("./webpack.config.base");

module.exports = {
  htmlWebpackPluginOption: HTML_WEBPACK_OPTION_BASE,
  defineName: "development",
  cssConfig: CSS_CONFIG_BASE
};
