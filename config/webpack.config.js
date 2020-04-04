// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

const env = process.env.NODE_ENV || 'development'

module.exports = [
  {
    mode: env,
    entry: paths.Main,
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      path: paths.Build,
      filename: 'main.js',
    },
  },
  {
    mode: env,
    entry: paths.App,
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      path: paths.Build,
      filename: 'app.js',
      publicPath: 'http://localhost:8080/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.Html,
      }),
    ],
  },
]
