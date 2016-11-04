const gulp = require("gulp")
const eslint = require("gulp-eslint")
const stylelint = require("gulp-stylelint")

gulp.task("lint:js", () =>
  gulp.src([ "*.js", "src/**/*.js" ])
    .pipe(eslint())
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
)

gulp.task("lint:css", () =>
  gulp.src([ "src/**/*.css" ])
    .pipe(stylelint({
      reporters: [
        { formatter: "string", console: true }
      ]
    }))
    .pipe(eslint.format("node_modules/eslint-formatter-pretty"))
)
