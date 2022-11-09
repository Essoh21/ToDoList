const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "production",

    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true,
        hot: true
    },

    // loaders 
    module: {
        rules: [
            {
                test: /\.css$/i, use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|png|ico|jpg|jpeg|webp|gif|)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ]
    },


    // plugins  

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        })
    ]
}