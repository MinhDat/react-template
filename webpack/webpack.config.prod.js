// WEBPACK CONFIGURATION PRODUCTION

const {
  APP_DIR,
  SOURCE_DIR,
  HTML_WEBPACK_OPTION_BASE
} = require("./webpack.config.base");

module.exports = {
  htmlWebpackPluginOption: {
    ...HTML_WEBPACK_OPTION_BASE,
    minify: {
      collapseWhitespace: true //Minify
    }
    // // Lazy loading
    // excludeChunks: ["contact"], // exclude file contact.js
    // chunks: ["contact"], // include file contact.js
    //
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
      },
      {
        loader: "postcss-loader",
        options: {
          path: SOURCE_DIR + "/config/postcss.config.js"
        }
      }
    ]
  }
};
