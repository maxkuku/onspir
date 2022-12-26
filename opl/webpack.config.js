const path = require("path")
const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, 'build'), // 2
        filename: 'index.[contenthash].js'
    },
    resolve: {
        fallback: {
            "fs": false
        },
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'img-loader'
                ],
                test: /\\.css$/, // 1
                use: ['style-loader', 'css-loader']
            },
        ]
    },
}