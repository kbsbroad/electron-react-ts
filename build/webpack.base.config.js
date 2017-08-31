const path = require('path')
const webpack = require('webpack')
const { fromRoot } = require('./utils')

export default {
  output: {
    path: fromRoot('dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    modules: [
      fromRoot('src'),
      fromRoot('node_modules')
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
