'use strict'

// Define Global Vars
global.checkChanged = true

const requireDir = require('require-dir')

requireDir('./gulpfile/tasks', { recurse: true })