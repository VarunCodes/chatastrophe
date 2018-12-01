var webpack = require('webpack');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    __dirname + "/src/index.js"
   ],
  output: {
   path: __dirname + "/public",
   filename: "bundle.js",
   publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/, //babel transpiles all files ending in .js
        exclude: /node_modules/, //we are excluding node_modules because it is already in ES5
        loader: 'babel-loader', //name of our loader
        query: {
         presets: ['es2015','react'],
         plugins: ['react-hot-loader/babel', 'transform-class-properties'] //query to define our presets (which Babel uses to transpile)
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
  contentBase: "./public", //sets /public as the folder to serve
  historyApiFallback: true, //lets our single page app seem like a multi page app
  inline: false, //refreshes page on file change
  }
};
