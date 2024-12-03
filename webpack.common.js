const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    article1: './src/javascripts/article1.js',
    article2: './src/javascripts/article2.js',
    article3: './src/javascripts/article3.js',
    article4: './src/javascripts/article4.js',
    about: './src/javascripts/about.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new webpack.HotModuleReplacementPlugin(),
    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Gallery
    new HtmlWebpackPlugin({
      template: './src/gallery/gallery.html',
      filename: './gallery.html',
      chunks: ['index']
    }),

    // About
    new HtmlWebpackPlugin({
      template: './src/about/about.html',
      filename: './about.html',
      chunks: ['index', 'about']
    }),

    // Education
    new HtmlWebpackPlugin({
      template: './src/education/education.html',
      filename: './education.html',
      chunks: ['index']
    }),

    // Style Guide
    new HtmlWebpackPlugin({
      template: './src/styleguide/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),

    // Articles
    new HtmlWebpackPlugin({
      template: './src/articles/articlesmain.html',
      filename: './articlesmain.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/article1.html',
      filename: './articles/article1.html',
      chunks: ['index', 'article1']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/article2.html',
      filename: './articles/article2.html',
      chunks: ['index', 'article2']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/article3.html',
      filename: './articles/article3.html',
      chunks: ['index', 'article3']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/article4.html',
      filename: './articles/article4.html',
      chunks: ['index', 'article4']
    }),

    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
