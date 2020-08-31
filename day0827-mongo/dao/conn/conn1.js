// 1.导入mongoose模块
const mongoose = require('mongoose');
// 数据库配置
// mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser: true, useUnifiedTopology: true})


// 2.先获取config里面的data数据库
// module.exports = {
//     host:'mongodb://localhost:27017/mydb',
//     opts:{useNewUrlParser: true, useUnifiedTopology: true}
// }

const dbConfig = require('../../config/data');
// console.log(dbConfig)
// 连接服务器
mongoose.connect(dbConfig.host,dbConfig.opts);
// 输出
module.exports = mongoose;
