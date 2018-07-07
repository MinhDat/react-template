// WEBPACK CONFIGURATION

// Import Webpack npm module
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const {
  isProd,
  DEV_DIR,
  PROD_DIR,
  APP_DIR,
  extendCSSConfig
} = require("./webpack.config.base");
const { extendJS, extendCSS } = require("../src/extendLibrarys");

let optionConfig = require("./webpack.config.dev");
if (isProd) optionConfig = require("./webpack.config.prod");

const config = {
  entry: {
    preLoading: ["babel-polyfill", "react-hot-loader/patch"],
    app: APP_DIR + "/App.js",
    ...extendJS
    // reacthotloader: "react-hot-loader/patch"
  },
  output: {
    path: isProd ? PROD_DIR : DEV_DIR,
    filename: "js/[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(optionConfig.cssConfig)
      },
      {
        test: /\.(css|scss)$/,
        include: extendCSS,
        use: ExtractTextPlugin.extract(extendCSSConfig)
      },
      {
        test: /\.(png|jpg|ico|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "images/[name].[hash:9].[ext]"
          // outputPath: "assets"
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "fonts/[name].[hash:9].[ext]"
          // outputPath: "assets"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, isProd ? "../public" : "../build"),
    hot: true,
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin(optionConfig.htmlWebpackPluginOption),
    new ExtractTextPlugin({
      filename: "css/[name].bundle.css",
      disable: false,
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(optionConfig.defineName),
      PRODUCTION: isProd
    })
  ]
};
if (isProd) {
  config.plugins.push(
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  );
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            warnings: false
          }
        }
      })
    ]
  };
}

module.exports = config;
