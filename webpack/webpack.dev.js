var loaders = require('./loaders')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/index.ts'
  },
  output: {
    path: 'dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([{
      from: 'node_modules/angular/angular.js',
      to: ''
    }, {
      from: 'lib/lodash.min.js',
      to: ''
    }, {
      from: 'lib/vowl.js',
      to: ''
    }, {
      from: 'src/assets/css',
      to: 'css'
    }
    // , {
    //   from: 'bower_components/bootstrap/fonts',
    //   to: 'fonts'
    // }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: {
        baseDir: 'dist'
      },
      ui: false,
      online: false,
      notify: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    loaders: loaders
  }
}
