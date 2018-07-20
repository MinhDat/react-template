// WEBPACK CONFIGURATION DEVELOPMENT

const { APP_DIR, CSS_CONFIG_BASE } = require("./webpack.config.base");

module.exports = {
  htmlWebpackPluginOption: {
    title: "React template",
    hash: true, // Hash css/js bundle
    template: APP_DIR + "/index.html",
    favicon: APP_DIR + "/owl.ico"
  },
  defineName: "development",
  cssConfig: CSS_CONFIG_BASE
};
