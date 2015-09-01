var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    shell = require('shelljs'),
    browserify = require('browserify'),
    jstify = require('jstify'),
    source = require('vinyl-source-stream'),


    app = {
        'all': 'app/**',
        'styles': 'app/styles/*.scss',
        'javascript': 'app/js/**/*.js',
        'images': 'app/assets/*.*'
    },

    dist = {
        'all': 'dist/**/*'
    };

gulp.task('clean', function (cb) {
    return del([dist.all], cb);
});

gulp.task('browserify', function () {
    return browserify('./app/init.js', {debug: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function(done) {
  gulp.src(app.styles)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./app/styles/'))
    .on('end', done);
});

gulp.task('prod-sass', function(done) {
    gulp.src(app.styles)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./app/styles/'))
        .on('end', done);
});

gulp.task('dev-build', ['clean', 'sass', 'browserify'], function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']})
    ];
    gulp.src(['app/**','!app/styles/**' , '!app/js', '!app/js/**', '!app/**.js', '!app/templates', '!app/templates/**.html'])
        .pipe(gulp.dest('./dist'));
    gulp.src('app/bundle.js')
        .pipe(gulp.dest('./dist'));
    gulp.src('app/styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('prod-build', function () {

});

gulp.task('serve', function () {
    shell.exec(['node server/server.js']);
});

gulp.task('watch', function() {
    gulp.watch(app.all, ['dev-build']);
});

gulp.task('default', ['dev-build', 'watch']);
