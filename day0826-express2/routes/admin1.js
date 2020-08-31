const express = require('express');
const router = express.Router();
// 定义路由规则
router.get('/login',(req,res)=>{
    res.send('登陆页面')
})
router.get('/use',(req,res)=>{
    res.send('用户登录界面')
})
// 导出
module.exports = router;