const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
    sw: path.resolve(__dirname, "src/scripts/sw.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
        {
          from: "src/scripts/app.webmanifest",
          to: "app.webmanifest",
        },
        {
          from: "src/scripts/data/",
          to: "scripts/data/",
        },
        {
          from: "src/scripts/routes/",
          to: "scripts/routes",
        },
        {
          from: "src/scripts/views/pages/",
          to: "scripts/views/pages",
        },
        {
          from: "src/scripts/utils/",
          to: "scripts/utils",
        },
      ],
    }),
  ],
};
