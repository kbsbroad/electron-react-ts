import baseConfig from './webpack.base.config'
import merge from 'webpack-merge'

const isDev = process.env.NODE_ENV === 'development'

const mainConfig = merge(baseConfig, {
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  target: 'electron-main',
  entry: {
    main: '../src/main/index.ts'
  }
})

export default mainConfig
