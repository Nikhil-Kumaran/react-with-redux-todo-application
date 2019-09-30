const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { jsonBeautify } = require("beautify-json");

let config = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./build",
    historyApiFallback: true, //For react router
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
    config.resolve.alias["react-dom"] = "@hot-loader/react-dom";
  }

  if (argv.mode === "production") {
    //...
  }

  console.log("Webpack config\n");
  console.log("\n");
  jsonBeautify(config);
  console.log("\n");

  return config;
};
