// WEBPACK CONFIGURATION

// react-template
// Import Webpack npm module
//
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const {
  PRODUCTION_ENV,
  DEV_DIR,
  PROD_DIR,
  APP_DIR,
  CSS_CONFIG_BASE
} = require("./webpack.config.base");
const { importLibrary, includeLibrary } = require("../src/vendors");

let optionConfig = require("./webpack.config.dev");
if (PRODUCTION_ENV) optionConfig = require("./webpack.config.prod");

const config = {
  entry: {
    preLoading: ["babel-polyfill", "react-hot-loader/patch"],
    ...importLibrary,
    app: APP_DIR + "/App.js"
    // reacthotloader: "react-hot-loader/patch"
  },
  output: {
    path: PRODUCTION_ENV ? PROD_DIR : DEV_DIR,
    filename: "react-template/js/[name].[hash:9].js",
    publicPath: "/"
    // chunkFilename: "js/[name].[hash:9].js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: PRODUCTION_ENV ? "source-map" : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        exclude: [/node_modules/].concat(includeLibrary),
        use: ExtractTextPlugin.extract(optionConfig.cssConfig)
      },
      {
        test: /\.(css|scss)$/,
        include: includeLibrary,
        use: ExtractTextPlugin.extract(CSS_CONFIG_BASE)
      },
      {
        test: /\.(png|jpg|ico|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "[name].[hash:9].[ext]",
          outputPath: "react-template/images/",
          publicPath: "../../images"
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "[name].[hash:9].[ext]",
          outputPath: "react-template/fonts/",
          publicPath: "../../fonts"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(
      __dirname,
      PRODUCTION_ENV ? "../public" : "../build"
    ),
    hot: true,
    disableHostCheck: true,
    compress: true,
    stats: "errors-only",
    open: true,
    historyApiFallback: true,
    port: 9000
  },
  mode: optionConfig.defineName,
  plugins: [
    new HtmlWebpackPlugin(optionConfig.htmlWebpackPluginOption),
    new ExtractTextPlugin({
      disable: false,
      filename: "react-template/css/[name].[hash:9].css",
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
      PRODUCTION: PRODUCTION_ENV
    })
  ],
  cache: true
};
if (PRODUCTION_ENV) {
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
