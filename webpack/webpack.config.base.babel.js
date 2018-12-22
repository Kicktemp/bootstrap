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

/*
 |--------------------------------------------------------------------------
 | Let the config begin
 |--------------------------------------------------------------------------
 */
export default {
  entry: utils.removeEmpty(utils.entryPoints),
  output: {
    path: utils.paths.PUBLIC_PATH
  },
  stats: 'none',
  plugins: utils.removeEmpty([
    new webpack.NamedModulesPlugin(),
    new WebpackBar(),
    new Stylish(),
  ])
}