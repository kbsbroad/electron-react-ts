import path from 'path'
import webpack from 'webpack'
import { pathUtil } from './utils'

const { root } = pathUtil

export default {
  output: {
    path: root('dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    modules: [
      root('src'),
      root('node_modules')
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
