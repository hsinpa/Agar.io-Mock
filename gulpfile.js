var gulp = require('gulp'),
  connect = require('gulp-connect');

  gulp.task('connect', function() {
    connect.server({
      root: 'chapter01',
      livereload: true
    });
  });
gulp.task('default', ['connect']);
