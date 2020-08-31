const express = require('express');
const app = express();
app.listen(8080);
// 定义一个中间件函数
const isLogin = (req,res,next)=>{
    let username = req.query.username;
    if(username != 'admin'){
        next(err)
    }else{
        next()
    }
}

const logined = (req,res,next)=>{
    req.nickname = '李四';
    next();
}

const login = [isLogin,logined];
app.get('/user1',login,(req,res)=>{
    res.send('用户中心'+req.nickname)
})

app.use((err,req,res,next)=>{
    res.status(404).send('非法登录')
})


// app.get('/',(req,res)=>{
    // 把下面的文件分离出来,作为中间件
//     let username = req.query.username;
//     if(username != 'admin'){
//         res.send('非法请求')
//     }else{
//         res.send('请求成功')
//     }
// })