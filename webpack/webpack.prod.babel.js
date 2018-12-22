const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.config.base.babel.js')

const prodWebpackConfig = merge(baseWebpackConfig.default, {
})

module.exports = prodWebpackConfig
