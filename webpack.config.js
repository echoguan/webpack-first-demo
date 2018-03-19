var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口文件。ps:"__dirname"是node.js中的一个全局变量，它指向当前执行脚本
  entry: {
    main: "./src/script/main.js",
    hello: "./src/script/hello.js"
  },
  output: {
    path: __dirname + "/dist/js", // 打包后文件存放的位置
    filename: "[name]-[chunkhash].js" //打包后输出文件的文件名
  },
  plugins: [new htmlWebpackPlugin()]
};
