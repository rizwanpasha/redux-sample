const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

module.exports = config;
