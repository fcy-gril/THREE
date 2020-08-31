const querystring = require('querystring');
let query = 'a=aa&b=bb';
console.log(querystring.parse(query))
let obj = { a: 'aa', b: 'bb' }
console.log(querystring.stringify(obj))
// json对象转化成为json字符串
let objstr = JSON.stringify(obj)
// 产看objstr数据类型
console.log(typeof objstr)
// 查看数组数据类型
let arr = [1,2];
console.log(typeof arr)
arr = {a:2}
console.log(arr instanceof Array)