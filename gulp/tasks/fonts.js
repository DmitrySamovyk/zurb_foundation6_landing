var gulp = require('gulp');

gulp.task('copyfonts', function() {
  gulp.src('./scss/fonts/**/*.{ttf,woff,eot,svg}')
  .pipe(gulp.dest('./fonts'));
});