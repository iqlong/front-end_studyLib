const path = require('path')

console.log(__dirname);
console.log(path.basename(__dirname).length);
// 第二个参数用来去除后缀名
console.log(path.basename(__dirname),'.html');
// 返回目录的扩展名
console.log(path.extname('/d/dd/a.txt'))
