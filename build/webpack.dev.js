const { merge } = require("webpack-merge");
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: { // webpack服务
        historyApiFallback: true,  // 请求转发从而实现页面的正常跳转
        contentBase: path.join(__dirname, 'dist'),
        host: 'localhost',
        port: 3000,
        open: true
        // overlay: true
    }
})
