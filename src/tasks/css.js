import fs from "fs"
import gulp from "gulp"
import postcss from "postcss"
import stylelint from "gulp-stylelint"
import stylefmt from "stylefmt"

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
