const config = require('./webpack.config.common');

module.exports = {
  ...config,
  mode: "development",
  devtool: "source-map",
}
