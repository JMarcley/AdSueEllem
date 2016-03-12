var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    // reactify = require('reactify'),
    babelify = require('babelify'),
    package = require('./package.json'),
    nodemon = require('nodemon');


gulp.task('bundle', function() {
    return browserify(package.paths.app)
        // .transform('babel', {stripTypes: true, es6: true})
        .transform('babelify', {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source(package.dest.app))
        .pipe(gulp.dest(package.dest.dist));
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'],['bundle']);
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'bin/www', ext: 'js jsx jade',ignore:["public/scripts/react/*"]
    });
});
