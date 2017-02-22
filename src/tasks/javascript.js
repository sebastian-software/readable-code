import gulp from "gulp"
import prettier from "gulp-prettier"
import eslint from "gulp-eslint"
import plumber from "gulp-plumber"

import { getGitFiles } from "./core"

gulp.task("lint:js", () => {
  return gulp
    .src(getGitFiles(/\.(mjs|js|jsx)$/), { base: "." })
    .pipe(eslint())
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
    .pipe(eslint.failAfterError())
})

gulp.task("fix:js", () => {
  return gulp
    .src(getGitFiles(/\.(mjs|js|jsx)$/), { base: "." })
    .pipe(plumber())
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
