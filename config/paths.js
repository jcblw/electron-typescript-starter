const path = require('path')

const resolveApp = pathname => path.resolve(__dirname, '../src', pathname)

module.exports = {
  Main: resolveApp('./main.ts'),
  App: resolveApp('./app.tsx'),
  Build: path.resolve(__dirname, '../dist'),
  Html: resolveApp('./index.html')
}
