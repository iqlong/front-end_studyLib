const path = require('path');

module.exports = {
    //  模式，开发
    mode: 'development',
    // 入口文件
    entry: './src/index.js',
    // 打包到什么文件
    output: {
        filename: 'bundle.js'
    },
    // 配置一下webpack-dev-server
    devServer: {
        // 静态文件根目录
        contentBase: path.join(__dirname, "www"),
        // 不压缩
        compress: false,
        // 端口号
            // options should NOT have additional properties
        port: 2233,
        // 虚拟打包的路径，bundle.js文件没有真正的生成
            // options should NOT have additional properties
            // 选项名字写错：pubic写成了publick
        publicPath: "/xuni/"
    }
}