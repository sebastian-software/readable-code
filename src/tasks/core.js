import spawn from "cross-spawn"

export const execSync = spawn.sync

export function getGitFiles(regexp) {
  var gitFiles = execSync("git", [ "ls-files" ], { stdio: "pipe" }).stdout.toString().trim().split("\n")
  return gitFiles.filter((fileName) => {
    return regexp.exec(fileName)
  })
}

export const PRETTIER_CONFIG = {
  printWidth: 111,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  trailingComma: "none",
  jsxBracketSameLine: true,
  bracketSpacing: true,
  semi: false
}
