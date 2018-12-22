import webpack from 'webpack'
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.config.base.babel.js')

/*
 |--------------------------------------------------------------------------
 | Hot Middleware Client
 |--------------------------------------------------------------------------
 */
const hotClient =
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&overlay=true'

/*
 |--------------------------------------------------------------------------
 | Defining Entry Points, could be used to manually split Parts of the Application, for example
 | Admin Javascript and FrontEnd JavaScript
 |--------------------------------------------------------------------------
 */
let entries = utils.entryPoints

Object.keys(entries).forEach((entry) => entries[entry] = [hotClient].concat(entries[entry]))


const devWebpackConfig = merge(baseWebpackConfig.default, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: utils.removeEmpty(entries),
  output: {
    publicPath: '/',
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/chunks/[name].js')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = devWebpackConfig
