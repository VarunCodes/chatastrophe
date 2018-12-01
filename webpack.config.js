module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
   path: __dirname + "/public",
   filename: "bundle.js",
   publicPath: "/",
 },
  devServer: {
  contentBase: "./public", //sets /public as the folder to serve
  historyApiFallback: true, //lets our single page app seem like a multi page app
  inline: true, //refreshes page on file change
}
};
