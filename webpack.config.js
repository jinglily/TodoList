//开发   dev

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/index.js')
    ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/build/"
  },
  devServer: {
    port: 4000,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval' , //报错在源码里
  resolve: {
    extensions: ["", ".js",".jsx",".css"]
  },
  module: {
  loaders: [
    {
      test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader"
    },
    {
      test: /\.css/,loader: 'style!css'
    },
    {
      test: /\.(jpe?g|png)$/,loader:'file-loader'
    }
  ]
}
}
