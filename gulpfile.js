const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require ('gulp-uglify');


function compactaSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }
    ))
    .pipe(gulp.dest('./dist/styles'))
}
function compactaJs(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

function compactaimg(){
    return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}



exports.watch = function(){
    gulp.watch('src/styles/*.scss', gulp.parallel(compactaSass,compactaJs,compactaimg))
}

exports.default = gulp.parallel(compactaimg,compactaJs,compactaSass,)
