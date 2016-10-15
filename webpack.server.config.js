const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'server.jsx'),
  externals: _(fs.readdirSync(path.resolve(__dirname, 'node_modules')))
    .transform(
      (result, mod) => {
        result[mod] = `commonjs ${mod}`; // eslint-disable-line no-param-reassign
        return result;
      },
      {}
    )
    .value(),
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
  node: {
    __filename: true,
    __dirname: true
  },
  output: {
    filename: 'server.bundle.js'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  target: 'node'
};
