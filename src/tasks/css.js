import gulp from "gulp"
import stylelint from "gulp-stylelint"
import plumber from "gulp-plumber"
import prettier from "gulp-prettier"
import formatter from "stylelint-formatter-pretty"

import { getGitFiles, PRETTIER_CONFIG } from "./core"

const PRETTIER_CSS_CONFIG = { ...PRETTIER_CONFIG, parser: "postcss" }

const SRC_SHEETS = /\.(css|sass|scss|sss|pcss)$/
const SRC_CONFIG = { base: "." }

gulp.task("lint:css", () => {
  return gulp
    .src(getGitFiles(SRC_SHEETS), SRC_CONFIG)
    .pipe(stylelint({
      reporters: [{
        formatter,
        console: true
      }]
    }))
})

gulp.task("fix:css", () => {
  return gulp
    .src(getGitFiles(SRC_SHEETS), SRC_CONFIG)
    .pipe(stylelint({
      fix: true,
      reporters: [{
        formatter,
        console: true
      }]
    }))
    .pipe(gulp.dest("."))
})

gulp.task("pretty:css", () => {
  return gulp
    .src(getGitFiles(SRC_SHEETS), SRC_CONFIG)
    .pipe(plumber())
    .pipe(prettier(PRETTIER_CSS_CONFIG))
    .pipe(stylelint({
      fix: true,
      reporters: [{
        formatter,
        console: true
      }]
    }))
    .pipe(gulp.dest("."))
})
