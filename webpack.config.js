var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    app: './index.js',
    vendor: ['jquery', 'underscore']
  },
  output: {
    filename: 'bundle.js',
    path: 'dist',
    publicPath: 'dist/'
  },
  resolve: {
    // root: path.join(__dirname, 'app'),
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])),
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery', 'window.jQuery': 'jquery'})
  ]
};
