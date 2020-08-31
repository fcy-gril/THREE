// 引入express
const express = require('express')
// 获取操作文件模块
const fs = require('fs')
// 获取路径模块
const path = require('path')

// 创建服务对象
const app = express()
// 监听端口
app.listen(8080)

app.get('/', (req, res) => {
  // 拼接文件路径
  let filepath = path.join(__dirname, 'html', 'index.html');
  console.log(filepath)//结果是: E:\千锋学习\QF_BK207_THREE\day0826-express2\html\index.html
  // 读取文件中的数据
  // 异常捕获
  try{ // 尝试执行一下，如果成功则执行此代码块中的程序
    let html = fs.readFileSync(filepath)
    res.send(html)
  }catch(e){ // 尝试了，但不成功，则执行此代码块中的内容
    // 抛出一个异常，告诉别人，我这里有错，但是我自己不处理 抛出以后，程序中断 
    throw new Error('读取文件失败')
  }
})

// 用户模块
app.get('/user', (req, res) => {

  // 获取get请求
  let username = req.query.username

  if (username != 'admin') { // 异常处理
    // res.status(404).send('账号不对不能访问')
    throw new Error('非法用户')
  } else {
    res.send('成功')
  }

})


app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(404).send('页面走丢了')
})