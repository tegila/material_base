const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

module.exports = {
  entry: './app/main.js',
  watchOptions: { poll: true },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: '',
    pathinfo: isDev,
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  devtool: isDev ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: 'body'
    }),
    new ProgressBarPlugin(),
  ],
  optimization: {
    namedModules: false, // NamedModulesPlugin()
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    concatenateModules: true, //ModuleConcatenationPlugin
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          mangle: true,
          keep_fnames: true,
          output: {
            beautify: false,
            comments: false
          }
        }
      })
    ]
  }
};
