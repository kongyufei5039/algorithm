'use strict'

const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, './test/*/index.js'))

  Object.keys(entryFiles)
    .map(index => {
      const entryFile = entryFiles[index]
      const match = entryFile.match(/\/test\/(.*)\/index\.js/)
      const pageName = match && match[1]

      entry[pageName] = entryFile
      htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        title: pageName,
        template: path.join(__dirname, `test/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      }))
    })

  return {
    entry,
    htmlWebpackPlugins
  }
}

const { entry, htmlWebpackPlugins } = setMPA()

module.exports = {
  entry: Object.assign({ index: './src/index.js' }, entry),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        include: [/\/src\/*\/*.js/, /\/test\/*\/*.js/]
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'algorithm-training',
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index']
    })
  ].concat(htmlWebpackPlugins),
  devServer: {
    contentBase: './dest',
    hot: true
  }
}
