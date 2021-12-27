const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Salary",
            template: "public/index.html"
        }),
    ]
}
