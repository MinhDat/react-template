const express = require("express");
const path = require("path");

const config = require("./config");
const PORT = config.PORT_FRONTEND || 3001;

const app = express();

const pathName = require("./config").isProduction ? "public" : "build";

// console.log(process.env.NODE_ENV);
// this assumes that all your app files
// `public` directory relative to where your server.js is
app.use(express.static(__dirname + "/" + pathName));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, pathName, "index.html"));
});

app.listen(PORT);
console.log("Application started on port " + PORT);
