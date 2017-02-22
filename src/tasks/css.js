import fs from "fs"
import gulp from "gulp"
import postcss from "postcss"
import stylelint from "gulp-stylelint"
import stylefmt from "stylefmt"
import { extname, resolve } from "path"
import scss from "postcss-scss"
import sugarss from "sugarss"

import { getGitFiles } from "./core"

gulp.task("lint:css", () => {
  return gulp
    .src(getGitFiles(/\.(css|sass|scss|sss)$/), { base: "." })
    .pipe(stylelint({
      reporters: [{ formatter: "string", console: true }]
    }))
})

gulp.task("fix:css", () => {
  var cssFiles = getGitFiles(/\.(css|sass|scss|sss)$/)
  return Promise.all(cssFiles.forEach((fileName) => {
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
