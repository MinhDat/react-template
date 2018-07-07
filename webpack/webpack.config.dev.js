// WEBPACK CONFIGURATION DEVELOPMENT

const { APP_DIR } = require("./webpack.config.base");

module.exports = {
  htmlWebpackPluginOption: {
    title: "Wefit",
    hash: true, // Hash css/js bundle
    template: APP_DIR + "/index.html"
  },
  defineName: "development",
  cssConfig: {
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[local]" // Hash sass classname
        }
      },
      {
        loader: "sass-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[local]" // Hash sass classname
        }
      }
    ]
  }
};
