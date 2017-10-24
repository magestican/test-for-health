const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../client-dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.scss$/,
        loader : "sass-loader" // compiles Sass to CSS
      }
    ]
  }
};
