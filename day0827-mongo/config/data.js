// 1.连接数据库，赶回promise对象
// const mongoose = require('express')
// mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
module.exports = {
    host:'mongodb://localhost:27017/mydb',
    opts:{useNewUrlParser: true, useUnifiedTopology: true}
}