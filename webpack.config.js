module.exports = {
  entry: __dirname + "/app/main.js", // 唯一入口文件。ps:"__dirname"是node.js中的一个全局变量，它指向当前执行脚本
  output: {
    path: __dirname + "/public", // 打包后文件存放的位置
    filename: "bundle.js" //打包后输出文件的文件名
  }
};
