import path from 'path'

const utils = require('./utils')

const prodWebpackConfig = {
  entry: utils.entryPoints,
  output: {
    path: utils.paths.PUBLIC_PATH
  }
}

module.exports = prodWebpackConfig
