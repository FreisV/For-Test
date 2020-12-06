const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3300,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
         MiniCssExtractPlugin.loader, 'sass-loader', 'style-loader'
        ],
      },
      {
        test: /\.css$/i,
        use: [
         MiniCssExtractPlugin.loader, 'css-loader'
        ],
      },
      {
        test: /.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPLugin({
      title: 'Development',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'assets', 'audio'),
          to: path.join(__dirname, 'dist', 'assets', 'audio'),
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
  ],
};
