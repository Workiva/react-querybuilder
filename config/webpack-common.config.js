'use strict';

let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../demo'),
                    path.resolve(__dirname, '../node_modules/uuid'),
                ],
            },
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'query-builder.css' })
    ],

    stats: {
        modules: false
    }
};
