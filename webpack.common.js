const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

// /tambahan untuk netlify
const webpack = require('webpack');

// Import environment variables
require('dotenv').config({
  path: path.resolve('.env'),
});

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    // Bundle Analizer
    new BundleAnalyzerPlugin(),
    // tambahn plugins untuk netlyfy
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
            ignore: ['**/images/**'],
          },
        },
      ],
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    // new WorkboxWebpackPlugin.InjectManifest({
    //   swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    //   swDest: './sw.bundle.js',
    // }),
    new WorkboxWebpackPlugin.GenerateSW({
      // swDest: './sw.bundle.js',
      // swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    // workbox
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://api.themoviedb.org/3/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'themoviedb-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://image.tmdb.org/t/p/w500/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'themoviedb-image-api',
          },
        },
      ],
    }),
  ],
};
