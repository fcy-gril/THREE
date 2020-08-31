const express = require('express');
const app = express();
app.listen(8080);
// 图片
// app.use('/images',express.static('nav/images'))
//css
// app.use('/css',express.static('nav/css'))
// app.use('/css1',express.static('nav/css1'))
// app.use('/css3',express.static('nav/css3'))
// app.use('/css4',express.static('nav/css4'))
// app.use('/css5',express.static('nav/css5'))
//js
// app.use('/js',express.static('nav/js'))
// app.use('/js1',express.static('nav/js1'))
// html
app.use(express.static('nav/html'))

app.use((req, res, next) => {
    // http状态码 页面不存在
    res.statusCode = 404
    // 给页面返回一个数据 模板
    // fs读取html文件来实现
    res.send('页面丢了')
  })


