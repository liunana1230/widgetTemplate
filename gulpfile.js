var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css');

gulp.task('platformCss', function() {
    return gulp.src(['app/styles/sources/*.css'], {
            cwd: '.',
            base: '.'
    })
    .pipe(concat('all.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('app/styles/target/'));
});

gulp.task('watchPlatformCss', function() {
    return gulp.watch('app/styles/sources/*.css', ['platformCss'])
});

gulp.task('default', function() {
    
});