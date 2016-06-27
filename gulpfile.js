var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');
var concat = require("gulp-concat");
var rename = require("gulp-rename");
//压缩JS
gulp.task('minify', function () {
   gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});
//将scss编译成css
gulp.task('sass', function(){
return gulp.src('src/styles/usage/app.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});
//复制图片
gulp.task("copyimg",function(){
	gulp.src("img/adv4.jpg")
	.pipe(gulp.dest("dis"))
})
//压缩CSS
gulp.task('minicss', function () {
   gulp.src('css/*.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('buildcss'))
});
//压缩图片
gulp.task('image', function(){
  return gulp.src('img/adv4.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('img/mi'));
});
//开启gulp服务器
gulp.task('server', function(){
  connect.server({
    root: 'dis',
    livereload: true
  });
});
//合并JS并压缩
gulp.task("addjs",function(){
	return gulp.src(["js/a.js","js/b.js"])
	.pipe(concat("min.js"))
	.pipe(gulp.dest("build"))
	.pipe(uglify())
	.pipe(rename("min1.js"))
	.pipe(gulp.dest("build"))
})
//复制文件
gulp.task("copyindex",function(){
	return gulp.src("dis/index.html")
	.pipe(gulp.dest("dis"))
	.pipe(connect.reload())
})
//监视
gulp.task("watch",function(){
	gulp.watch("src/styles/usage/*/*.scss",["sass"])
})
//重载
gulp.task("reload",function(){
	return gulp.pipe(connect.reload())
})
//默认
gulp.task('default', ['watch']);







