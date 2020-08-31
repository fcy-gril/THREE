// 1.引入express
const express = require('express');
// 2.得到路由模块对象
const router = express.Router();
// 3.定义路由规则
router.get('/',(req,res)=>{
    //获取get数据.?id=1&name='张三'
    let { query:get } = req.query 
    console.log(req.query)
    res.send('我是首页')
})
router.get('/list',(req,res)=>{
    res.send('我是列表页')
})
router.get('/detail/:id' , (req,res)=>{
    res.send('我是详情页'+req.params.id)
})
// 模块化导出,shiyongcommonjs规范
module.exports = router;