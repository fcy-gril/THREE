// 定义路由
// app.<get,post,put,delete>(uri,(req,res)=>{})
// 1.获取express
const express = require('express');
const app = express();
app.listen(8080);
app.get('/',(req,res)=>{
    res.send('我是首页')
})
app.get('/list',(req,res)=>{
    res.send('我是列表页')
})
app.get('/detail/:id',(req,res)=>{
    res.send('我是详情页')
})
// 404页面丢失
app.use((req,res,next)=>{
    // res.status(404).send('页面丢失了');
    res.statusCode = 404;
    res.send('页面丢失了')
   
})