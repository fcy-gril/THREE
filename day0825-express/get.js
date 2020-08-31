const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs')
// console.log(path.dirname())
// 定义一个网站根目录
// const webRoot = path.join(__dirname)
// console.log(webRoot)

http.createServer((req,res)=>{
    // 获取地址栏的query数据
    let {pathname , query:get} = url.parse(req.url , true)
    console.log( get , pathname)

}).listen(8080,()=>{
    console.log('启动服务成功')
})