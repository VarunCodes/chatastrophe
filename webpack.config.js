module.exports = {
  entry: __dirname + "/src/index.js",
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
         plugins: ['transform-class-properties'] //query to define our presets (which Babel uses to transpile)
        }
      },
    ]
  },
  devServer: {
  contentBase: "./public", //sets /public as the folder to serve
  historyApiFallback: true, //lets our single page app seem like a multi page app
  inline: false, //refreshes page on file change
  }
};
