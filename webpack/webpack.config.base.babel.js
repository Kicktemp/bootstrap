/**
 * Webpack Config for Javascript Bundling
 *
 * @author   Niels Nübel <niels@kicktemp.com>
 */

import path from 'path'

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
  }
}