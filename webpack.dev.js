const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build',
    hot: true

    /*contentBase: path.join(__dirname, 'dist'), // или другой путь к вашей сборке
    compress: true,
    port: 9000*/
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dev_build'),
    clean: true
  }
})
