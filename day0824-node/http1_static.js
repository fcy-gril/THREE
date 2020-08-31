const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { readFile, readFileSync } = require('fs')

// 文件根目录
const webRoot = path.join(__dirname,'nav')
// 定义404页面
const notpage = path.join(webRoot,'html','404.html')
console.log(notpage)

http.createServer((req,res)=>{
    //获取地址后面的参数
    let {pathname} = url.parse(req.url,true);
    if ('/favicon.ico' !== pathname){
    // 缺省值
    pathname = pathname === '/' ? '/nav.html': pathname
    // 获取扩展名 ,结果是html
    let extname = path.extname(pathname)
    // 设置默认文件路径
    let filepath = path.join(webRoot,pathname)
    // 判断是否是html页面
    if('.html' === extname ){
        filepath = path.join(webRoot,'html',pathname)

    }
    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.statusCode = 404;
            // res.end(path.join(webRoot,'html','404.html'))
            res.end(readFileSync(notpage))
            res.end('not found')

        }else{
            res.end(data)
        }
    })
    }
  
}).listen(8080,()=>console.log('启动成功'))