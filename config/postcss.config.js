module.exports = ({ file, options }) => ({
  plugins: {
    "postcss-import": { root: file.dirname },
    "postcss-cssnext": {
      browsers: ["last 2 versions", "> 5%"]
    },
    autoprefixer: options,
    cssnano: options
  }
});
