var gulp = require("gulp");
// var rjs = require("gulp-r");


// gulp.task('default', function() {
//     gulp.src("js/*.js")
//         .pipe(rjs({
//             baseUrl: "js"
//         }))
//         .pipe(gulp.dest("dist/js"));
// });



// var requirejsOptimize = require('gulp-requirejs-optimize');

// gulp.task('default', function() {
//     return gulp.src('js/app.js')
//         .pipe(requirejsOptimize({
//         	baseUrl: "js/lib"
//         }))
//         .pipe(gulp.dest('dist'));
// });


var rjs = require('gulp-rjs2');
var uglify = require('gulp-uglify');
 
// build libs.js 
gulp.task('default', function() {
  // deps 
  return rjs({
    baseUrl: 'js/lib',
    mainConfigFile: 'js/app.js',
    name: '../app',
    out: 'app.js',
    //include: ['libraries'],
    //insertRequire: ['libraries'],
    removeCombined: true,
    findNestedDependencies: true,
    optimizeCss: 'none',
    optimize: 'none',
    skipDirOptimize: true,
    wrap: false
  })
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});