const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function tranformacaoJS(cb) {
    //Filtrando arquivos
    return gulp.src('src/**/*.js') //Vai filtrar qualquer arquivos js que está dentro da pasta src
        .pipe(babel({
            comments: false, //Faz com que os comentatrios dos arquivos não sejam tranfiridos para os arquivos finais
            presets: ["env"] //Vai pegar os codigos em javaScript modernos e transformar para uma versão mais antiga
        })) // Filtro tira os comentarios e torna o JavaScript mais compativel com os navegadores Web`s
        .pipe(uglify()) //Vai mimificar os codigos em JavaScript
        .on('error', err => { console.log(err) })
        .pipe(concat('codigo.min.js')) //Pega todos os codigos mimificados e junta tirando todos os epaços
        .pipe(gulp.dest('build')) //Pega o resultado e armazena dentro da pasta build

    //  return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(tranformacaoJS, fim)