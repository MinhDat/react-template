// WEBPACK CONFIGURATION DEVELOPMENT

const { APP_DIR, extendCSSConfig } = require("./webpack.config.base");

module.exports = {
  htmlWebpackPluginOption: {
    inject: false,
    title: "React Template",
    hash: true, // Hash css/js bundle
    template: APP_DIR + "/index.html"
  },
  defineName: "development",
  cssConfig: extendCSSConfig
};
