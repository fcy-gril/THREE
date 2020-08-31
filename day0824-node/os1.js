// // 正常写法
// const os = require('os');
// // console.log(osR)
// // cpus的出来是数组形式
// console.log(os.cpus());
// // 取数组length长度
// console.log(os.cpus().length);
// // 获取服务器总内存数量 字节 => kb mb g
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem());


// es6写法
const {cpus,totalmem,freememe} = require('os');
console.log(cpus().length);
console.log(totalmem(),freememe());





