
// webpack.config.js
const path = require('path')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

module.exports = [
  {
    mode: env,
    entry: paths.Main,
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: paths.Build,
      filename: 'electron.js'
    }
  },
  {
    mode: env,
    entry: path.App,
    target: 'electron-renderer',
    devtool: 'source-map',
    module: { rules: [{
      test: /\.ts(x?)$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }] },
    output: {
      path: paths.Build,
      filename: 'app.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.Html
      })
    ]
  }
];
