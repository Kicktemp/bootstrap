import { getIfUtils, removeEmpty } from 'webpack-config-utils'
import path from 'path'
import kicktempConf from '../config.json'

exports.getIfUtils = getIfUtils
exports.removeEmpty = removeEmpty

exports.kicktempConf = kicktempConf
exports.entryPoints = kicktempConf.src.jsEntryPoints

/*
|--------------------------------------------------------------------------
| Setting some paths for our Application
|--------------------------------------------------------------------------
*/
const paths = {}
paths.ROOT_PATH = path.resolve(__dirname, '..')
paths.PUBLIC_PATH = path.join(paths.ROOT_PATH, kicktempConf.dist.webpackpublic)
exports.paths = paths

/*
 |--------------------------------------------------------------------------
 | Helper Functions
 |--------------------------------------------------------------------------
 */
exports.resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}

exports.assetsPath = function (_path) {
    return path.posix.join(paths.ASSETS_PATH, _path);
}