const path = require('path')

const resolveApp = pathname =>
  path.resolve(__dirname, '../src', pathname)

module.exports = {
  Main: resolveApp('./main.ts'),
  App: resolveApp('./app.tsx'),
  Html: resolveApp('./index.html'),
  DevHtml: resolveApp('./dev.html'),
  Build: path.resolve(__dirname, '../dist'),
}
