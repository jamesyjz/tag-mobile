'use strict';
var gulp = require('gulp')
// browser-sync
    , browserSync = require('browser-sync')
    , reload = browserSync.reload
// js
    , uglify = require('gulp-uglify')
    , concat = require('gulp-concat')
    , sourcemaps = require('gulp-sourcemaps')
    , jshint = require('gulp-jshint')
// css
    //, minifyCss = require('gulp-minify-css')
// image
    , imagemin = require('gulp-imagemin')
    , pngcrush = require('imagemin-pngcrush')
// util
    //, argv = require('minimist')(process.argv.slice(2))
    , watch = require('gulp-watch')
    , plumber = require('gulp-plumber')
    , rev = require('gulp-rev')
    , gutil = require('gulp-util')
    , cache = require('gulp-cache')
    , newer = require('gulp-newer')
    , gulpif = require('gulp-if')
    , gulpifelse = require('gulp-if-else')
    , clean = require('gulp-rimraf')
    , filter = require('gulp-filter')
    , inject = require("gulp-inject")
    , preprocess = require('gulp-preprocess')
    , rename = require("gulp-rename")
    , replace = require('gulp-replace')
    , notify = require("gulp-notify")
    , size = require('gulp-size')
    , bowerFiles = require('main-bower-files')
    , es = require('event-stream');


// Watch
gulp.task('watch', function() {
    watch([
        './css/*.css',
        './*.html'
    ], function(files) {
        return files
            .pipe(plumber())
            .pipe(browserSync.reload({stream:true}));
    });

    // for js
    watch('./js/*.js', function(files) {
        return files
            .pipe(plumber())
            .pipe(filter('*.js'))
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(browserSync.reload({stream:true}));
    });
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        startPath: '/index.html'
    });
});

// Default
gulp.task('default', ['browser-sync', 'watch']);
