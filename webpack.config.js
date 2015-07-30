var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');
var del = require('del');

var DIST = path.join(__dirname, 'dist');

del(DIST);//delete the dist folder

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    index: './index.js',
    profile: './profile.js',
    dashboard: './dashboard.js',
    vendor: ['jquery', 'underscore', 'a']
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST,
    publicPath: 'dist/',
    jsonpFunction: 'seajs',
    chunkFilename: '[name].[hash].js'
  },
  resolve: {
    // root: path.join(__dirname, 'app'),
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: {
    loaders: [
      {test: '/\.js$/', loader: 'uglify'}
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])),
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery', 'window.jQuery': 'jquery'}),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
