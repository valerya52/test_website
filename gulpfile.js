const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const cssFile = [
    './assets/css/slick/slick.css',
    './assets/css/slick/slick-theme.css',
    './assets/css/animate.css',
    './assets/css/iconfont.css',
    './assets/css/font-awesome.min.css',
    './assets/css/bootstrap.css',
    './assets/css/magnific-popup.css',
    './assets/css/bootsnav.css'
];

const  jsFiles = [
    './compiled_files/request.js',
    './compiled_files/preloader.js',
    './compiled_files/slider.js',
    './compiled_files/modalRegist.js'
]

function css () {
    return gulp.src(cssFile)
        .pipe(concat('style.css'))
        .pipe(cleanCss({
            level: 2
        }))
    .pipe(gulp.dest('./build/css'))
}

function js() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
}

gulp.task('css', css);
gulp.task('js', js);




