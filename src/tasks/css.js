import fs from "fs"
import gulp from "gulp"
import postcss from "postcss"
import stylelint from "gulp-stylelint"
import stylefmt from "stylefmt"
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
  var cssFiles = getGitFiles(SRC_SHEETS)
  return Promise.all(cssFiles.map((fileName) => {
    var fileContent = fs.readFileSync(fileName, "utf-8")
    var fileExtension = extname(fileName)

    var fileSyntax = fileExtension === ".scss" ? scss : null
    var fileParser = fileExtension === ".sss" ? sugarss : null

    return postcss([ stylefmt ])
      .process(fileContent, {
        from: fileName,
        syntax: fileSyntax,
        parser: fileParser
      })
      .then((result) => {
        return fs.writeFileSync(fileName, result.css, "utf-8")
      })
  }))
})
