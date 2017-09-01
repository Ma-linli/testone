/**
 * Created by malinli on 2017/8/9.
 */
var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
gulp.task('js',function() {
    return gulp.src('src/js/{a,b,c}.js')
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch',function(){
    gulp.watch('src/js/{a,b,c}.js');
});

gulp.task('default',['js','watch']);

