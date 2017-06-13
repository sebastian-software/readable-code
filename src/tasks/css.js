import fs from "fs"
import gulp from "gulp"
import postcss from "postcss"
import stylelint from "gulp-stylelint"
import { extname } from "path"
import scss from "postcss-scss"
import sugarss from "sugarss"
import formatter from "stylelint-formatter-pretty"

import { getGitFiles } from "./core"

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
    .pipe(gulp.dest('.'))
})
