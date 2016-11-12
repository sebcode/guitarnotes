/* eslint-disable no-var */

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

module.exports = {

  entry: [
    './app/'
  ],

  resolve: {
    root: [
      path.resolve('./app'),
    ]
  },

  output: {
    path: __dirname + '/public/staticjs/',
    filename: 'bundle.js',
    publicPath: '/staticjs/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.json$/, loader: 'json' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new WebpackNotifierPlugin(),
  ]
 
}
