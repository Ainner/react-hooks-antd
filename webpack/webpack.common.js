const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    path.resolve(__dirname, '../src/')
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.jsx?$/,
        include: /src/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  }
}
