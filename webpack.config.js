const Path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Mocker = require('webpack-api-mocker');

const outPath = Path.join(__dirname, './dist');
const sourcePath = Path.join(__dirname, './src');

module.exports = (env, options) => {
  const config = {
    context: sourcePath,
    entry: {
      // vendor: ['classnames', 'react', 'react-dom', '@reach/router', 'react-modal', 'rc-cascader'],
      // bootstrap: './framework/vendors/bootstrap/bootstrap.scss',
      main: './index.tsx',
      polyfills: './polyfills.ts'
    },
    output: {
      path: outPath,
      // publicPath: '/',
      filename: "[name].js"
    },
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       commons: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendors',
    //         chunks: 'all'
    //       }
    //     }
    //   }
    // },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    devtool: 'source-map',//不使用eval方便调试
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          use: 'awesome-typescript-loader'
        },
        // css "style-loader"
        {
          test: /\.(sass|scss|css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({ browsers: ['last 2 versions', '> 1%', "IE 9"] })
              ]
            }
          }
          ]
        },
        // static assets
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.(jpg|png|gif)$/, use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash].[ext]',
                outputPath: './images/',
                useRelativePath: false
              }
            },
          ]
        },
        {
          test: /\.js$/,
          include: /\/node_modules\//,
          loader: 'es3ify'
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devServer: {
      contentBase: sourcePath,
      hot: true,
      stats: {
        warnings: false
      },
      // proxy: {
      //   '/shengou/*': {
      //     target: 'http://192.168.1.81:8011',
      //     changeOrigin: true,
      //     secure: false
      //   },
      //   '/ajax/loadRangeNew*': {
      //     target: 'http://192.168.1.84:8011',
      //     changeOrigin: true,
      //     secure: false
      //   },
      // },
      // before(app) {
      //   Mocker(app, Path.resolve('mock/index.js'))
      // },
      disableHostCheck: true
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            ie8: true
          },
          sourceMap: true
        })
      ]
    },
    node: {
      fs: 'empty'
    }
  };
  if (options.mode == 'production') {
    config.resolve.alias = {
      //如果你在移动端用到了onTouchTap事件
      // 'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',
      'react': 'anujs/dist/ReactIE',
      'react-dom': 'anujs/dist/ReactIE',
      '@reach/router': 'anujs/dist/Router'
    }
  }
  return config;
}
