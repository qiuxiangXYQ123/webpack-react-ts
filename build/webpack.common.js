// webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 帮助讲js名字引入html
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //清空之前打包后的文件夹
// npm i -D style-loader css-loader  解析css文件
// npm i -D less less-loader  解析less文件
// npm i -D postcss-loader autoprefixer  为css添加浏览器前缀
// npm i -D mini-css-extract-plugin  拆分css
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //拆分css
// npm i -D babel-loader @babel/preset-env @babel/core 将ES6/7/8转义成ES5
// npm i @babel/polyfill 将js的新Api转义
// npm i react react-dom 安装react依赖
// npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react 安装相关配置
// npm i -D webpack-dev-server 添加开发服务器
// npm i -D webpack-merge 区分开发模式和生产模式
// npm i -D eslint-loader 添加eslint模块
// npm i -D eslint 安装eslint
// npm install --save react react-dom @types/react @types/react-dom
// npm install --save-dev typescript awesome-typescript-loader source-map-loader
const WebpackBar = require('webpackbar'); // 添加打包进度条
module.exports = {
    entry: {
        index:path.resolve(__dirname,'../src/index.tsx'),
        // header:path.resolve(__dirname,'../src/header.js'),
        "@babel/polyfill":path.resolve(__dirname,'../src/index.tsx')

    },    // 入口文件
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.ts', '.tsx'], // 后缀名自动补全
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    plugins:[
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            filename:'index.html',
            chunks:['index'] // 与入口文件对应的模块名
        }),
        // new HtmlWebpackPlugin({
        //     template:path.resolve(__dirname,'../public/header.html'),
        //     filename:'header.html',
        //     chunks:['header'] // 与入口文件对应的模块名
        // }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'] // 从右向左解析原则
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ], // 从右向左解析原则
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [
                              path.resolve(__dirname, '../styles/common.less'),
                              path.resolve(__dirname, '../styles/variables.less')
                            ]
                        },
                    }
                ], // 从右向左解析原则
                // sideEffects: true
            },
            {
                test: /\.(jpe?g|png|gif)$/i, //图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(js|mjs|jsx|ts|tsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env']
                    }
                },
                exclude:/node_modules/
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader",
                options: {
                    transpileOnly: true,}
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            // {
            //     test: /\.(js|mjs|jsx|ts|tsx)$/,
            //     exclude: /node_modules/,
            //     use: ['babel-loader', 'eslint-loader'],
            // }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
}
