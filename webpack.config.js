const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: ["./src/js/main.js"],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, "css-loader",],

            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },
        ]
    },


    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    plugins: [ new MiniCssExtractPlugin(
        { 
          filename: './styles.css' 
          //also tried: path.resolve(__dirname, "dist", "styles.css") 
        }),
        new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/index.html')
    })],
    mode: "development"
};