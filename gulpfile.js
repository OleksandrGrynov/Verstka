const { src, dest, watch, series, parallel } = require('gulp');
const sass            = require('gulp-sass')(require('sass'));
const fileinclude     = require('gulp-file-include');
const browserSync     = require('browser-sync').create();
const uglify          = require('gulp-uglify');
const concat          = require('gulp-concat');

// 1. HTML: інклудим partials → build/index.html
function html() {
    return src('src/index.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('build'))
        .pipe(browserSync.stream());
}

// 2. SCSS → CSS: збираємо всі partials у один styles.css
function styles() {
    return src('src/scss/styles.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(dest('build/css'))
        .pipe(browserSync.stream());
}

// 3. JS: конкатенуємо (якщо буде більше файлів) і мінімізуємо
function scripts() {
    return src('src/js/**/*.js')
        .pipe(concat('accordion.js'))
        .pipe(uglify())
        .pipe(dest('build/js'))
        .pipe(browserSync.stream());
}

// 4. Картинки: копіюємо все зображення в build/images
function images() {
    return src('src/images/**/*')
        .pipe(dest('build/images'))
        .pipe(browserSync.stream());
}

// 5. Сервер + Watch
function serve() {
    browserSync.init({
        server: 'build',
        notify: false
    });

    watch('src/index.html', html);
    watch('src/partials/**/*.html', html);
    watch('src/scss/**/*.scss', styles);
    watch('src/js/**/*.js', scripts);
    watch('src/images/**/*', images);
}

exports.default = series(
    parallel(html, styles, scripts, images),
    serve
);
function css() {
    return gulp.src('src/scss/styles.scss') // ⚠️ тільки головний файл!
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
}
