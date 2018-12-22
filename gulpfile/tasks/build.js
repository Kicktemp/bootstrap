/**
 * Automatic Deploy
 *
 * @description: Deploy Task for an automated Build Process
 */

import gulp from 'gulp'
import runSequence from 'run-sequence'

const buildTask = (cb) => {

  // Overwrite the Changed Check
  global.checkChanged = true

  runSequence(
    [
      'copy:files'
    ],
    cb)
}

gulp.task('build', buildTask)
module.exports = buildTask
