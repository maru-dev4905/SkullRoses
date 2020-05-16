import gulp from "gulp";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import sass from "gulp-sass";
import csso from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";
import autoprefixer from "gulp-autoprefixer";
import gPug from "gulp-pug";

sass.compiler = require("node-sass");

const routes = {
    pug: {
        watch: "src/**/**/*.pug",
        src: "src/*.pug",
        dest:"build"
    },
    img:{
        src: "src/images/**/**",
        dest: "build/images"
    },
    sass:{
        watch: "src/scss/**/**/*.scss",
        src:"src/scss/skull.scss",
        dest:"build/css"
    },
    js:{
        watch: "src/js/**/*.js",
        src: "src/js/*.js",
        dest: "build/js"
    }
};

const view = () =>
    gulp
        .src(routes.pug.src)
        .pipe(gPug())
        .pipe(gulp.dest(routes.pug.dest));

const style = () =>
    gulp
        .src(routes.sass.src)
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest(routes.sass.dest));

const clean = () => del(["build/"]);

const webserver = () =>
    gulp
        .src("build/")
        .pipe(ws({livereload:true, open:true}));

const js = () =>
    gulp
        .src(routes.js.src)
        .pipe(bro({
            transform:[
                babelify.configure({presets:["@babel/preset-env"]}),
                ["uglifyify",{global:true}]
            ]
        })
    ).pipe(gulp.dest(routes.js.dest));

const images = () =>
        gulp
            .src(routes.img.src)
            .pipe(image())
            .pipe(gulp.dest(routes.img.dest));

const watch = () =>
        gulp.watch(routes.pug.watch, view);
        gulp.watch(routes.sass.watch, style);
        gulp.watch(routes.js.watch, js);

const prepare = gulp.series([clean, images]);

const assets = gulp.series([view, style, js]);

const live = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, live]);