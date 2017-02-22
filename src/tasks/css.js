import fs from "fs"
import gulp from "gulp"
import postcss from "postcss"
import stylelint from "gulp-stylelint"
import stylefmt from "stylefmt"
import { extname } from "path"
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
  cssFiles.forEach((fileName) => {
    var fileContent = fs.readFileSync(fileName, "utf-8")
    var fileExtension = extname(fileName)

    var fileSyntax = null
    if (fileExtension === ".scss") {
      fileSyntax = scss
    }
    if (fileExtension === ".sss") {
      fileSyntax = sugarss
    }

    postcss([ stylefmt ])
      .process(fileContent, {
        from: fileName,
        syntax: fileSyntax
      })
      .then((result) => {
        return fs.writeFileSync(fileName, result.css, "utf-8")
      })
      .catch((error) => {
        throw new Error(`Error during CSS formatting: ${error}`)
      })
  })
})
