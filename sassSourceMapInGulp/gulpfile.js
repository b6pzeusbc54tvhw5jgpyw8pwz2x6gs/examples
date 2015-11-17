var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
//var sass = require('gulp-sass');
var sass = require('gulp-ruby-sass');

 
gulp.task('scss-to-css', function() {

	return sass('scss/*.scss', { sourcemap: true })
	.pipe(sourcemaps.write())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(minifyCss({}))
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe( concat("app.min.css"))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest( './build' ));
});

gulp.task('default', ['scss-to-css']);
