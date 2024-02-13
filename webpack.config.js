const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    runtimeChunk: "single",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
