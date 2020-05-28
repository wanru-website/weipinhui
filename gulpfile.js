const gulp=require("gulp")

gulp.task("copy-html",()=>{
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
})
gulp.task("data",()=>{
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
})
gulp.task("images",function(){
  return gulp.src("*.{jpg,png}")
  .pipe(gulp.dest("dist/img"))
})
gulp.task("scripts",()=>{
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
})

//处理scss代码 gulp-sass gulp-minify-css gulp-rename
const scss=require("gulp-sass");
const monifyCss=require("gulp-minify-css")
const rename=require("gulp-rename")

gulp.task("scss1",()=>{
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
})
gulp.task("scss2",()=>{
    return gulp.src("stylesheet/init.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
})
//全部执行所有任务
gulp.task("build",["copy-html","data","images","scripts","scss1","scss2"],()=>{
    console.log("成功")
})

//启动监听
gulp.task("watch",()=>{
    gulp.watch("*.html",["copy-html"])
    gulp.watch(["*.json","!package.json"],["data"])
    gulp.watch("*.{jpg,png}",["images"])
    gulp.watch(["*.js","!gulpfile.js"],["scripts"])
    gulp.watch("stylesheet/index.scss",["scss1"])
    gulp.watch("stylesheet/init.scss",["scss2"])
})
//启动一临时服务器不支持php 下载  cnpm i gulp-connect -D
