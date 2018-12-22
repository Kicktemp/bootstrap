import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CleanWebpackPlugin from 'clean-webpack-plugin'
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.config.base.babel.js')

/*
 |--------------------------------------------------------------------------
 | Merge the configs
 |--------------------------------------------------------------------------
 */
const prodWebpackConfig = merge(baseWebpackConfig.default, {
  output: {
    publicPath: '/',
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/chunks/[name].js')
  },
  plugins:[
    new CleanWebpackPlugin(
      [
        utils.resolve(utils.kicktempConf.dist.js),
      ],
      {
        root: utils.paths.PUBLIC_PATH,
        beforeEmit: true,
        exlude: ['style.css', 'style.css.map']
      }
    ),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: `${utils.paths.ROOT_PATH}/webpack/stats.json`,
      logLevel: 'info'
    })
  ]
})

module.exports = prodWebpackConfig
