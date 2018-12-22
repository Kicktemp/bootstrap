/**
 * Copy Files
 * @description Copy all Files
 */

import kt from '../../config.json'
import gulp from 'gulp'
import gutil from 'gulp-util'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

const copyFiles = () => {
  kt.copyfiles.forEach(function(item) {
    gulp
      .src([item.src + '**/**'])
      .pipe(global.checkChanged === true ? $.changed(item.dest) : gutil.noop())
      .pipe(gulp.dest(item.dest))
  })
}

gulp.task('copy:files', copyFiles)
module.exports = copyFiles
