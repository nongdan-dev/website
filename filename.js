const fs = require('node:fs')
const path = require('node:path')
const { builtinModules } = require('node:module')
const { globbySync } = require('globby')
const { dependencies, devDependencies } = require('./package.json')

const arr = globbySync('**/*', { gitignore: true })

const whitelist = ['Makefile', 'README.md']
console.log('=== file name with upper case')
arr
  .filter(v => /[A-Z]/.test(v))
  .filter(v => !whitelist.includes(path.basename(v)))
  .forEach(v => console.log(v))

console.log('=== import with upper case')
arr.forEach(name => {
  if (!/\.(js|jsx|ts|tsx)/.test(name)) {
    return
  }
  let content = fs.readFileSync(name, 'utf-8')
  const re = /import[^']+from\s+'([^']+)'/
  let logFileName = false
  while (true) {
    const m = re.exec(content)
    if (!m) {
      return
    }
    const importLine = m[0]
    const importPath = m[1]
    if (/[A-Z]/.test(importPath)) {
      const arr = importPath.split('/')
      const pkgs = [arr[0], [arr[0], arr[1]].join('/')]
      if (
        !pkgs.some(
          p =>
            builtinModules?.includes(p) ||
            dependencies?.[p] ||
            devDependencies?.[p],
        )
      ) {
        if (!logFileName) {
          logFileName = true
          console.log(name)
        }
        console.log('  ' + importPath)
      }
    }
    content = content.replace(importLine, '')
  }
})
