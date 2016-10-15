const path = require('path');
const webpack = require('webpack');

const entry = path.resolve(__dirname, process.env.NODE_ENV === 'production' ? 'build/Index.jsx' : 'app/Index.jsx');

module.exports = {
  entry,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: 'public',
    publicPath: '/'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
