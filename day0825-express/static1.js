const express = require('express');
const app = express();
app.listen(8080);
app.use('/images',express.static('src/images'));
app.use('/css',express.static('src/css'));
app.use('js',express.static('src/js'));
app.use(express.static('src/html'));
app.use((req, res, next) => {
    // http状态码 页面不存在
    res.statusCode = 404
    // 给页面返回一个数据 模板
    // fs读取html文件来实现
    res.send('页面丢了')
  })