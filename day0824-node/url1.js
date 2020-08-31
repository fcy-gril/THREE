
// Node.js推荐写法
// const url = new URL('https://www.baidu.com/a/b/c/d/a.html?id=100&name=zhangsan#hash');
// console.log(url)

// 常用方法
const url = require('url');
const href = 'https://www.baidu.com/a/b/c/d/a.html?id=100&name=zhangsan#hash';
// console.log(url.parse(href));
// 解构赋值写法
let {pathname,query:{id=100}} = url.parse(href,true,false);
let ret =  url.parse(href,true,false);
console.log(ret)