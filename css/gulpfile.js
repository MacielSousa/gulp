const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function tranfomarcaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarTML(cb) {
    gulp.src('src/**/*.html')
        .pipe(concat('paginas.min.html'))
        .pipe(gulp.dest('build/html'))
    return cb()
}

module.exports.default = series(tranfomarcaoCSS, copiarTML)