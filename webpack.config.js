const path = require('path');
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
            // {
            //     test: /\.svg/,
            //     use: {
            //       loader: "svg-url-loader",
            //       options: {
            //         // make loader to behave like url-loader, for all svg files
            //         encoding: "base64",
            //       },
            //     },
            //   },
            // {//use SVGR for imports in js/jsx files
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     oneOf: [
            //         {
            //         use: [
            //             'babel-loader',
            //             {
            //             loader: '@svgr/webpack',
            //             options: {
            //                 babel: false,
            //                 icon: true,
            //             },
            //             }
            //         ],
            //         issuer: {
            //             and: [/\.(js|jsx)$/],
            //         },
            //         },
            //     ],
            // }
        ],
    },
};