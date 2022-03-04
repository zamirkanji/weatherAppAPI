const path = require('path');
// const moment = require('moment');
// require("svg-url-loader!./file.svg");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Development'
    //     })
    // ]
    // plugins: [
    //     // To strip all locales except “en”
    //     new MomentLocalesPlugin(),

    //     // Or: To strip all locales except “en”, “es-us” and “ru”
    //     // (“en” is built into Moment and can’t be removed)
    //     new MomentLocalesPlugin({
    //         localesToKeep: ['es-us', 'ru'],
    //     }),
    // ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};