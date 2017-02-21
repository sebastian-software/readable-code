import spawn from "cross-spawn"

export const execSync = spawn.sync

export function getGitFiles(regexp) {
  var gitFiles = execSync("git", [ "ls-files" ], { stdio: "pipe" }).stdout.toString().trim().split("\n")
  return gitFiles.filter((fileName) => {
    return regexp.exec(fileName)
  })
}
