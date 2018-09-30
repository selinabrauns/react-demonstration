const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'MHP',
  filename: 'index.html',
  template: './template.html'
});

module.exports = {
  mode: 'none',
  resolve: {
    extensions: ['.js', '.jsx', '.scss' ],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Views: path.resolve(__dirname, 'src/views/'),
    }
  },
  entry: ["@babel/polyfill",'./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin, miniCssPlugin],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    publicPath: '/',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://anapioficeandfire.com/',
        "changeOrigin": true,
      }

    }
  },
  devtool: 'eval-source-map'
};