/* eslint-disable prefer-arrow-callback */

var fs = require("fs")
var postcss = require("postcss")
var gulp = require("gulp")
var eslint = require("gulp-eslint")
var stylelint = require("gulp-stylelint")
var stylefmt = require("stylefmt")
var exec = require("child_process").execSync

function getGitFiles(regexp) {
  var gitFiles = exec("git ls-files").toString().trim().split("\n")
  return gitFiles.filter(function(fileName) { return regexp.exec(fileName) })
}

gulp.task("lint:js", function() {
  return gulp.src(getGitFiles(/\.(js|jsx)$/))
    .pipe(eslint())
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(eslint.failAfterError())
})

gulp.task("fix:js", function() {
  return gulp.src(getGitFiles(/\.(js|jsx)$/))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(gulp.dest("."))
})

gulp.task("lint:css", function() {
  return gulp.src(getGitFiles(/\.(css|sass|scss|sss)$/))
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
    }).catch(function(err) {
      throw new Error("Error during CSS formatting: " + err)
    })
  })
})

