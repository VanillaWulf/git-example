const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

var browserSync = require("browser-sync").create();

gulp.task('css', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest("./css"))
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/**/*.{scss,sass}", gulp.series('css', 'reload'));
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});
