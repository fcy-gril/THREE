// 1.引入path模块
const path = require('path');
const filePath = 'c:/a/b/c/d.html';
// 获取的是最后一部分，文件名字+扩展名字  
console.log(path.basename (filePath)) // d.html

//获取当前的路径 路径最后分隔符部分被忽略  一般用于路径切换
console.log(path.dirname (filePath))  // c:/a/b/c
console.log(path.dirname (path.dirname(filePath))) //  c:/a/b

//获取文件扩展名
console.log(path.extname (filePath))  //.html

// 路径拼接

console.log( path.join('http','www','a','b.html') )  //http\www\a\b.html

