const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.config.base.babel.js')

const prodWebpackConfig = merge(baseWebpackConfig.default, {
  output: {
    publicPath: '/',
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/chunks/[name].js')
  },
})

module.exports = prodWebpackConfig
