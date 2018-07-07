// WEBPACK CONFIGURATION PRODUCTION

const { APP_DIR } = require("./webpack.config.base");

module.exports = {
  htmlWebpackPluginOption: {
    title: "Wefit",
    minify: {
      collapseWhitespace: true //Minify
    },
    // // Lazy loading
    // excludeChunks: ["contact"], // exclude file contact.js
    // chunks: ["contact"], // include file contact.js
    //
    hash: true, // Hash css/js bundle
    template: APP_DIR + "/index.html"
  },
  defineName: "production",
  cssConfig: {
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[sha1:hash:hex:9]" // Hash css classname
        }
      },
      {
        loader: "sass-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[sha1:hash:hex:9]" // Hash sass classname
        }
      }
    ]
  }
};
