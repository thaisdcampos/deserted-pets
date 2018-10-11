const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/javascripts/app.js',
    './app/stylesheets/app.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/templates/index.hbs',
      minify: true
    }),
    new ExtractTextPlugin({
  		filename: 'app.css',
  		allChunks: true
  	})
  ],
  module: {
    rules: [
      {
  			test: /\.hbs$/,
  			use: 'handlebars-loader'
  		},
      {
  			test: /\.(sass|scss)$/,
  			use: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
  		}
    ]
  }
};
