/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-commonjs */

var fs = require("fs")
var postcss = require("postcss")
var gulp = require("gulp")
var eslint = require("gulp-eslint")
var stylelint = require("gulp-stylelint")
var stylefmt = require("stylefmt")
var exec = require("cross-spawn").sync

function getGitFiles(regexp) {
  var gitFiles = exec("git", [ "ls-files" ], { stdio: "pipe" }).stdout.toString().trim().split("\n")
  return gitFiles.filter(function(fileName) { return regexp.exec(fileName) })
}

gulp.task("clean", function() {
  console.log(exec("git", [ "clean", "--force" ], { stdio: "pipe" }).stdout.toString())
})

gulp.task("clean:full", function() {
  console.log(exec("git", [ "clean", "--force", "-x" ], { stdio: "pipe" }).stdout.toString())
})

gulp.task("lint:js", function() {
  return gulp.src(getGitFiles(/\.(mjs|js|jsx)$/), { base: "." })
    .pipe(eslint())
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(eslint.failAfterError())
})

gulp.task("fix:js", function() {
  return gulp.src(getGitFiles(/\.(msj|js|jsx)$/), { base: "." })
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(gulp.dest("."))
})

gulp.task("lint:css", function() {
  return gulp.src(getGitFiles(/\.(css|sass|scss|sss)$/), { base: "." })
    .pipe(stylelint({
      reporters: [
        { formatter: "string", console: true }
      ]
    }))
})

gulp.task("fix:css", function() {
  var cssFiles = getGitFiles(/\.(css|sass|scss|sss)$/)
  cssFiles.forEach(function(fileName) {
    var fileContent = fs.readFileSync(fileName, "utf-8")

    // TODO: Support different syntax/formats
    postcss([ stylefmt ]).process(fileContent).then(function(result) {
      return fs.writeFileSync(fileName, result.css, "utf-8")
    }).catch(function(error) {
      throw new Error(`Error during CSS formatting: ${error}`)
    })
  })
})
