/* eslint-disable no-console */
/* eslint-disable promise/prefer-await-to-then */

import fs from "fs"
import postcss from "postcss"
import gulp from "gulp"
import eslint from "gulp-eslint"
import stylelint from "gulp-stylelint"
import prettier from "gulp-prettier"
import stylefmt from "stylefmt"
import spawn from "cross-spawn"

const execSync = spawn.sync

function getGitFiles(regexp) {
  var gitFiles = execSync("git", [ "ls-files" ], { stdio: "pipe" }).stdout.toString().trim().split("\n")
  return gitFiles.filter((fileName) => {
    return regexp.exec(fileName)
  })
}

gulp.task("clean", () => {
  console.log(execSync("git", [ "clean", "--force" ], { stdio: "pipe" }).stdout.toString())
})

gulp.task("clean:full", () => {
  console.log(execSync("git", [ "clean", "--force", "-x" ], { stdio: "pipe" }).stdout.toString())
})

gulp.task("lint:js", () => {
  return gulp
    .src(getGitFiles(/\.(mjs|js|jsx)$/), { base: "." })
    .pipe(eslint())
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(eslint.failAfterError())
})

gulp.task("fix:js", () => {
  return gulp
    .src(getGitFiles(/\.(msj|js|jsx)$/), { base: "." })
    .pipe(prettier({
      printWidth: 111,
      tabWidth: 2,
      singleQuote: false,
      trailingComma: "none",
      bracketSpacing: true
    }))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(gulp.dest("."))
})

gulp.task("lint:css", () => {
  return gulp
    .src(getGitFiles(/\.(css|sass|scss|sss)$/), { base: "." })
    .pipe(stylelint({
      reporters: [{ formatter: "string", console: true }]
    }))
})

gulp.task("fix:css", () => {
  var cssFiles = getGitFiles(/\.(css|sass|scss|sss)$/)
  cssFiles.forEach((fileName) => {
    var fileContent = fs.readFileSync(fileName, "utf-8")

    // TODO: Support different syntax/formats
    postcss([ stylefmt ])
      .process(fileContent)
      .then((result) => {
        return fs.writeFileSync(fileName, result.css, "utf-8")
      })
      .catch((error) => {
        throw new Error(`Error during CSS formatting: ${error}`)
      })
  })
})
