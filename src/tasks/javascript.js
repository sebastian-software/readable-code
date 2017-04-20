import gulp from "gulp"
import prettier from "gulp-prettier"
import eslint from "gulp-eslint"
import plumber from "gulp-plumber"

import { getGitFiles } from "./core"

const SRC_SCRIPTS = /\.(mjs|js|jsx)$/
const SRC_CONFIG = { base: "." }
const PRETTIER_CONFIG = {
  printWidth: 111,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  trailingComma: "none",
  jsxBracketSameLine: true,
  bracketSpacing: true,
  semi: false
}
const ESLINT_FORMATTER = "node_modules/eslint-formatter-pretty"

gulp.task("lint:js", () => {
  return gulp
    .src(getGitFiles(SRC_SCRIPTS), SRC_CONFIG)
    .pipe(eslint())
    .pipe(eslint.format(ESLINT_FORMATTER))
    .pipe(eslint.failAfterError())
})

gulp.task("pretty:js", () => {
  return gulp
    .src(getGitFiles(SRC_SCRIPTS), SRC_CONFIG)
    .pipe(plumber())
    .pipe(prettier(PRETTIER_CONFIG))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format(ESLINT_FORMATTER))
    .pipe(gulp.dest("."))
})

gulp.task("fix:js", () => {
  return gulp
    .src(getGitFiles(SRC_SCRIPTS), SRC_CONFIG)
    .pipe(plumber())
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format(ESLINT_FORMATTER))
    .pipe(gulp.dest("."))
})
