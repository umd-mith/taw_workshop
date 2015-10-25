'use strict';

// Dependencies
var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var size = require('gulp-size');
var runSequence = require('run-sequence');

gulp.task('clean', function(callback) {
  return del(['./public/js/**'], callback);
});

gulp.task('build:js', function() {
  return gulp.src(['bower_components/d3/d3.js',
    'src/js/**/*.js'])
    .pipe(concat('taw.js'))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(rename('taw.min.js'))
    .pipe(size({'showFiles': true}))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', function(callback) {
  return runSequence(
    'clean',
    'build:js',
    callback
  );
});
