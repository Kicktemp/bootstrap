/**
 * Tthe Watch Tasks for SASS,
 * JADE, JS and activate BrowserSync
 */

import kt from '../../config.json'
import gulp from 'gulp'
import watch from 'gulp-watch'
import path from 'path'

const watchTask = () => {
  // Watch the SCSS Folder for changes - compile CSS
  gulp.watch([kt.src.style + '**/**/*.scss', kt.src.style + '**/**/*.sass'], ['compiler:css'])
  
  // Watch the Structure
  gulp.watch(kt.watchfiles, ['copy:files'])
}

gulp.task('watch', watchTask)
module.exports = watchTask
