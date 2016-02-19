var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    merge = require('merge-stream'),
    watch = require('gulp-watch');

var htmlPath = '../web/html/';
var symfoPath = '../';

/* For SASS */
gulp.task('sass', function () {

    gulp.src(htmlPath + 'scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(htmlPath + '/css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(htmlPath + '/css'))

});

/* For building SPRITESMITH */
gulp.task('sprite', function () {

    var spriteData = gulp.src(htmlPath + 'images/origin/*.{png,jpg,gif}')
        .pipe(spritesmith({
            imgName: 'spritesheet.png',
            imgPath: '../images/sprites/spritesheet.png',
            cssName: '_spritesheet.scss',
            cssTemplate: htmlPath + 'scss/templates/spritesheet.scss.handlebars'
        }));

    var imgStream = spriteData.img.pipe(buffer()).pipe(imagemin());

    var cssStream = spriteData.css.pipe(buffer()).pipe(gulp.dest(htmlPath + 'scss/modules'));

    return merge(imgStream, cssStream);

});

/* For UGLIFY minify JS */
gulp.task('uglify', function () {

    gulp.src(htmlPath + 'js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(htmlPath + 'js/min/'))

});

/* For BROWSER-SYNC and WATCH */
gulp.task('browser', function () {

    browserSync.init({
        /*server: {
            baseDir: htmlPath
            //Here init proxy

        }*/
        proxy : {
            target: "local.gasy-e-sport.dev",
            https: true
        }
    });

});

/* Watch event for change */
gulp.task('watch', function () {

    gulp.watch(htmlPath + 'images/origin/*.*', ['sprite']).on('change', browserSync.reload);
    gulp.watch(htmlPath + 'images/*.*').on('change', browserSync.reload);
    gulp.watch(htmlPath + 'scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch(htmlPath + 'js/*.js', ['uglify', browserSync.reload]);
    gulp.watch(symfoPath + 'src/**/*.php').on('change', browserSync.reload);
    gulp.watch(htmlPath + '**/*.html').on('change', browserSync.reload);    

});

/************************************************
 * Compilation des codes et lancement du server *
 ************************************************/

gulp.task('server', ['sass', 'uglify', 'sprite', 'browser', 'watch']);
gulp.task('compil', ['sass', 'uglify', 'sprite'])