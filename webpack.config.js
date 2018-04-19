const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'inline-wysiwyg.min.js',
      libraryTarget: 'window',
      library: 'InlineWysiwyg',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/inline-wysiwyg.vue'),
    output: {
      filename: 'inline-wysiwyg.js',
      libraryTarget: 'umd',
      library: 'inline-wysiwyg',
      umdNamedDefine: true
    }
  })
];
