const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const { fromRoot } = require('./utils')

const isDev = process.env.NODE_ENV === 'development'

const rendererConfig = {
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  target: 'electron-renderer',
  entry: {
    renderer: '../src/renderer/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [fromRoot('src')],
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}

if(isDev) {
  const oldRenderer = rendererConfig.entry.renderer
  rendererConfig.entry.renderer = [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    oldRenderer
  ]
}

export default merge(baseConfig, rendererConfig)
