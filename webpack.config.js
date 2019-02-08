const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => autoprefixer({
              browsers: ['ie >= 8', 'last 4 version']
            })
          }
        }, 'sass-loader'])
  }, 

    //   {
    //     test: /\.scss$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: 'style-loader',
    //       use: ['css-loader', 'sass-loader']
    //     })
    //   },
    //   {
    //     test: /\.css$/,
    //     use: [
    //       {
    //         loader: 'postcss-loader',
    //         options: {
    //             plugins: [
    //                 autoprefixer({
    //                     browsers:['ie >= 8', 'last 4 version']
    //                 })
    //             ],
    //             sourceMap: true
    //         }
    //     },
    //     ]
    // },
    // {
    //   test: /\.scss$/,
    //   use: ExtractTextPlugin.extract({
        
    //     use: [
    //       // {
    //       //   loader: 'style-loader'
    //       //  },
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           sourceMap: true
    //         }
    //       },
    //       {
    //         loader: 'postcss-loader',
    //         options: {
    //           ident: 'postcss',
    //           plugins: () => {
    //             return [
    //               require('autoprefixer')()
    //             ];
    //           },
    //           sourceMap: true
    //         }
    //       },
    //       {
    //         loader: 'sass-loader',
    //         options: {
    //           sourceMap: true
    //         }
    //       }
    //     ]
    //   })
    // },
  //   {
  //     test: /\.scss$/,
  //    // use: ExtractTextPlugin.extract({
  //      // fallback: 'style-loader',
  //     use: [
  //         {
  //             loader: 'style-loader'
  //         },
  //         {
  //             loader: 'css-loader',
  //             options: {
  //                 sourceMap: true
  //             }
  //         },
  //         {
  //             loader: 'postcss-loader',
  //             options: {
  //                 plugins: [
  //                     autoprefixer({
  //                         browsers:['ie >= 8', 'last 4 version']
  //                     })
  //                 ],
  //                 sourceMap: true
  //             }
  //         },
  //         {
  //             loader: 'sass-loader',
  //             options: {
  //             //   includePaths: [
  //             //     helpers.root('src', 'styles', 'global'),
  //             // ],
  //               //publicPath: '/',
  //                 sourceMap: true
  //             }
  //         }
  //     ]
  //   //})
  // },
  

      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     }
      //   ]
      // },
    //   {
    //     test: /\.svg/,
    //     use: {
    //         loader: 'svg-url-loader',
    //         options: {}
    //     }
    // },
    {
      test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: 'public',
            name: 'images/[name].[ext]',
            // publicPath: 'images/',
          },
        },
      ],
    },
  //   {
  //     test: /\.svg$/,
  // loader: 'svg-sprite-loader',
  // options: {
  //   extract: true,
  //   publicPath: 'images'
  // }
  //   },
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'} 
    ]), 
    //new SpriteLoaderPlugin(),
  ],
  performance: { hints: false }
};