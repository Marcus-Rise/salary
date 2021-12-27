const config = require("./webpack.config.common");

module.exports = {
  ...config,
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}
