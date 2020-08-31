const express = require('express');
const app = express();
app.listen(8080);
// use中间件
//第一个参数为空的话，证明是所有规则都符合,next参数规定是否向下执行路由规则
app.use((req,res,next)=>{
    console.log('我是use中间件')
    // next()

});
app.get('/',(req,res)=>{
    res.send('use的使用')
})