const config = require('./webpack.config.common');

module.exports = {
  ...config,
  mode: "development",
  devServer: {
    static: "./dist",
  },
}
