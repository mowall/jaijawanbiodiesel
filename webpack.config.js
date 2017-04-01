var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: path.resolve(__dirname,'./assets/javascript/main.js'),
     devtool: debug ? 'inline-sourcemap':false,
     output: {
         path: path.resolve(__dirname, 'public'),
         filename: 'main.bundle.js',
         publicPath: '/public/'
     },
     module: {
         loaders: [
             { test: /\.js$/,
                loader: 'babel-loader',
                exclude:/(node_modules|bower_components)/,
                query: { presets: ['es2015', 'react','stage-0'] } },
             { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
             { test: /\.(png|jpg)$/, loader: 'url-loader' }
         ]
     },
     resolveLoader: {
    modules: ["node_modules"]
  },
     plugins: debug ? [] : [
       new webpack.optimize.UglifyJsPlugin({
         compress: { warnings: false },
         minimize: true
       }),
       new webpack.DefinePlugin({
            'process.env': {
            NODE_ENV: JSON.stringify('production')
            }
        }),
     ],
     stats: {
         colors: true
     },
 };
