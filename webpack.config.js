
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {

  entry: [
    './app/'
  ],

  resolve: {
    modules: [ 'app', 'node_modules' ]
  },

  output: {
    path: __dirname + '/public/staticjs/',
    filename: '[name].js',
    publicPath: '/staticjs/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' }
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
