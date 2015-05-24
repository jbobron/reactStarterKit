var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');

gulp.task('browserify', function(){
  gulp.src('src/App.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('App.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('./dist/**/*.*', {read: false}) // much faster
    .pipe(rimraf());
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/styles/*.css')
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', function(cb) {
  runSequence('clean', 'browserify', 'copy', 'watch', cb);
});
