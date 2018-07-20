module.exports = {
  importLibrary: {
    bootstrap: [
      "bootstrap/dist/js/bootstrap.js",
      "bootstrap/dist/css/bootstrap.css"
    ],
    fontAWeSome: ["font-awesome/css/font-awesome.css"],
    reactSelect: ["react-select/dist/react-select.css"]
  },
  includeLibrary: [
    /node_modules\/bootstrap/,
    /node_modules\/font-awesome/,
    /node_modules\/react-select/
  ]
};
