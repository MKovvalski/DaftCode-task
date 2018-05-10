'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var styleLintPlugin = require('stylelint-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
  entry: './src/main.js',

  output: {
    path: __dirname,
    filename: 'js/app.js'
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('css/app.css'),

    // Stylelint plugin
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: '',
      files: '*/.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?url=false!sass-loader"
      },
      { test: /\.svg$/, loader: 'svg-loader?pngScale=2' },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
    ]
  },

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
