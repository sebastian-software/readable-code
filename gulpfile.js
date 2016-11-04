/* eslint-disable prefer-arrow-callback */

const gulp = require("gulp")
const eslint = require("gulp-eslint")
const stylelint = require("gulp-stylelint")
const exec = require("child_process").execSync

function getGitFiles(regexp) {
  var gitFiles = exec("git ls-files").toString().trim().split("\n")
  return gitFiles.filter(function(fileName) { return regexp.exec(fileName) })
}

gulp.task("lint:js", function() {
  return gulp.src(getGitFiles(/\.(js|jsx)$/))
    .pipe(eslint())
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
})

gulp.task("lint:css", function() {
  return gulp.src(getGitFiles(/\.(css|sass|scss|sss)$/))
    .pipe(stylelint({
      reporters: [
        { formatter: "string", console: true }
      ]
    }))
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
})
