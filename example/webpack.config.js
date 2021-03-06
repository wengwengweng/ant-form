const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, './index.jsx'),
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'ant-form': path.join(__dirname, '..', 'lib', 'index'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modulesf/,
      query: { compact: false },
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: { compact: false },
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
}
