const express = require("express");
const path = require("path");

const { PORT_FRONTEND, PRODUCTION_ENV } = require("./config");
const PORT = PORT_FRONTEND || 3001;

const app = express();

const pathName = PRODUCTION_ENV ? "public" : "build";

// console.log(process.env.NODE_ENV);
// this assumes that all your app files
// `public` directory relative to where your server.js is
app.use(express.static(__dirname + "/" + pathName));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, pathName, "index.html"));
});

app.listen(PORT);
console.log("Application started on port " + PORT);
