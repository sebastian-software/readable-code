import gulp from "gulp"
import prettier from "gulp-prettier"
import eslint from "gulp-eslint"
import plumber from "gulp-plumber"

import { getGitFiles, PRETTIER_CONFIG } from "./core"

const SRC_SCRIPTS = /\.(mjs|js|jsx)$/
const SRC_CONFIG = { base: "." }

const ESLINT_FORMATTER = "node_modules/eslint-formatter-pretty"

gulp.task("lint:js", () => {
  return gulp
    .src(getGitFiles(SRC_SCRIPTS), SRC_CONFIG)
    .pipe(eslint())
    .pipe(eslint.format(ESLINT_FORMATTER))
    .pipe(eslint.failAfterError())
})

gulp.task("fix:js", () => {
  return gulp
    .src(getGitFiles(SRC_SCRIPTS), SRC_CONFIG)
    .pipe(plumber())
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format(ESLINT_FORMATTER))
    .pipe(gulp.dest("."))
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
