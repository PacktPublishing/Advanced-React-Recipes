/* eslint-disable */
const webpack = require('webpack');
const config = require('./webpack.config.js');

require('dotenv').config();

config.plugins.push(
  new webpack.DefinePlugin({
    API_URL: JSON.stringify(process.env.DEV_API_URL),
  })
);

module.exports = config;
