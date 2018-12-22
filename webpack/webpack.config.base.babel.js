/**
 * Webpack Config for Javascript Bundling
 *
 * @author   Niels Nübel <niels@kicktemp.com>
 */

import path from 'path'
import webpack from 'webpack'
import WebpackBar from 'webpackbar'
import Stylish from 'webpack-stylish'

const utils = require('./utils')

const nodeEnv = process.env.NODE_ENV || 'production'

const {
  ifProduction,
  ifDevelopment
} = utils.getIfUtils(nodeEnv)

/*
 |--------------------------------------------------------------------------
 | Let the config begin
 |--------------------------------------------------------------------------
 */
export default {
  entry: utils.removeEmpty(utils.entryPoints),
  output: {
    pathinfo: ifDevelopment(true, false),
    path: utils.paths.PUBLIC_PATH
  },
  stats: 'none',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        options: {
          configFile: ifProduction('./.eslintrc.js', './.eslintrc-dev.js'),
          formatter: require('eslint-friendly-formatter')
        },
        exclude: /node_modules/,
        include: utils.resolve(utils.kicktempConf.src.base)
      }
    ]
  },
  plugins: utils.removeEmpty([
    new webpack.NamedModulesPlugin(),
    new WebpackBar(),
    new Stylish(),
  ])
}