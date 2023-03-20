
module.rules = {
    test: /\.pug$/,
    loader: 'pug-plain-loader'
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test_vue/" : "/",
};
