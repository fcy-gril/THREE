// 1.引入express框架
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.监听get/post/delect/put请求
// get方式
app.get('/',(req,res)=>{
    // res.send('你好，世界')
    res.send('<h1>我是张三</h1>');

})
// post方式
app.post('/',(req,res)=>{
    res.send('我是post请求')
})
// put请求
app.put('/',(req,res)=>{
    res.send('我是put请求')
})
// delete请求
app.delete('/',(req,res)=>{
    res.send('我是delete请求')
})
// 监听端口
app.listen(8080,()=>{
    console.log('请求成功')
})
