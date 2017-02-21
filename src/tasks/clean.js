/* eslint-disable no-console */

import gulp from "gulp"

import { execSync } from "./core"

gulp.task("clean", () => {
  console.log(execSync("git", [ "clean", "--force" ], { stdio: "pipe" }).stdout.toString())
})

gulp.task("clean:full", () => {
  console.log(execSync("git", [ "clean", "--force", "-x" ], { stdio: "pipe" }).stdout.toString())
})
