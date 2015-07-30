## 开始

```
$ npm install
$ bower install
```

## 构建

```
$ webpack
```

## 说明

```
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    app: './index.js',
    vendor: ['jquery', 'underscore'] //公用库
  },
  output: {
    filename: 'bundle.js',
    path: 'dist',
    publicPath: 'dist/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'] //require 查找模块文件夹
  },
  plugins: [
    new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])),
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery', 'window.jQuery': 'jquery'})
  ]
};
```

遇到问题：

1. 如何使用bower的资源

[usage-with-bower](http://webpack.github.io/docs/usage-with-bower.html)

通过文档可知道原来webpack去查找文件是通过配置的`moduleDirectories` 来逐个文件夹查找, 默认情况下 `require('jquery')` 去 `node_modules` (逐级的查找，即查找本目录的`node_modules`, 在向上最终到系统的`node_modules`的目录), 如果`package.json`中定义了`main`字段，则按照这个字段定义的去找文件，如果没定义则找`index.js`文件
