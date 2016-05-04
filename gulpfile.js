var gulp         = require('gulp');
var connect      = require('gulp-connect');
var stylus       = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var rigger       = require('gulp-rigger');
var notify       = require('gulp-notify');
// Local server
gulp.task('connect', function () {
  connect.server({
    root: 'development',
    livereload: true
  });
});

// TEMPLATES
gulp.task('TEMPLATES', function () {
  gulp.src('./development/html/**/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./development/templates/'))
    .pipe(connect.reload());
});

// SCRIPTS
gulp.task('SCRIPTS', function() {
  gulp.src("./development/scripts/*.js")
    .pipe(connect.reload());
});

// STYLES
gulp.task('STYLES', function() {
  var onError = function(err) {
    notify.onError({
      title:    "Styles",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>"
    })(err);
    this.emit('end');
  };

  return gulp.src("./development/styl/*.styl")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': false,
      compress: true
    }))
    .pipe(autoprefixer({
      browsers: [ 'last 2 versions', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4' ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./development/css"))
    .pipe(connect.reload());
});

// Vendor css
gulp.task('VENDORCSS', function () {
  gulp.src('./development/styl/includes/vendor.css')
    .pipe(gulp.dest('./development/css/'))
    .pipe(connect.reload());
});

//IMAGES
gulp.task('IMAGES', function() {
  gulp.src("./development/images/**/*")
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['development/html/*.html'], ['TEMPLATES']);
  gulp.watch(['development/html/modules/*.html'], ['TEMPLATES']);
  gulp.watch(['development/scripts/*.js'], ['SCRIPTS']);
  gulp.watch(['development/styl/**/*.styl'], ['STYLES']);
  gulp.watch(['development/images/**/*'], ['IMAGES']);
  gulp.watch(['development/styl/includes/vendor.css'], ['VENDORCSS']);
});

// Watching project files
gulp.task('default', ['connect', 'watch', 'TEMPLATES', 'SCRIPTS', 'STYLES', 'IMAGES', 'VENDORCSS']);