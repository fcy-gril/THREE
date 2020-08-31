// 在入口文件中引入自定义路由规则
const express = require('express');
// 引入后台模块
const adminRouter = require('./routes/admin1');
// 引入news模块
const newsRouter = require('./routes/news1');
// 定义应用对象
const app = express();
app.listen(8080);
// 在入口文件中引入自定义路由规则,使用中间件
app.use(newsRouter)
app.use(adminRouter)
// 404处理
app.use((req,res,next)=>{
    res.status(404).send('页面丢失了')
})