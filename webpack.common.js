const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
  module: {
    rules: [
      // Add support for native node modules
      {
        test: /\.node$/,
        use: "node-loader",
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
}
