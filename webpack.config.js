const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

let config = {
    mode: 'production',
    // entry: {
    //     background: './src/background/background.js'
    // },
    // devtool: 'inline-source-map',
    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'content/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            }
        ],
    },
    plugins: [
        // new ManifestPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './views/index.html'
        // }),
        // new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },

    watch: true
}

let configArr = [];

// background.js
configArr.push(Object.assign({}, config, {
    entry: {
        background: './src/background/index.js'
    }
}));

// content-script.js
configArr.push(Object.assign({}, config, {
    entry: {
        'content-script': './src/content/index.js'
    }
}));
module.exports = configArr;
