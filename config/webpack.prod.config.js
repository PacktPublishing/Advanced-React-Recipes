/* eslint-disable */
const webpack = require('webpack');
const config = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

config.plugins.push(
  new webpack.DefinePlugin({
    API_URL: JSON.stringify(process.env.PROD_API_URL),
  })
);

config.plugins.push(
  new HtmlWebpackPlugin({
    filename: '200.html',
    template: 'index.html',
    inject: 'body',
  })
);

module.exports = config;
