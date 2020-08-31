const express = require('express');
// 初始化express
const app = express();
// 端口号
const port = 3000;
// 导入fs包
const fs = require('fs');
// 导入body解析包
const bodyParser = require('body-parser');
// const file = require('auth.json');
app.listen(port, () => {
    console.log('listen 3000 success ~');
});
// 解析body参数
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 时间戳
const utilDate = () => {
    const myDate = new Date(); //实例一个时间对象；
    const year = myDate.getFullYear(); //获取系统的年；
    const month = myDate.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
    const day = myDate.getDate(); // 获取系统日，
    const hour = myDate.getHours(); //获取系统时，
    const minute = myDate.getMinutes(); //分
    const second = myDate.getSeconds(); //秒
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

// 写入文件
const writeLog = (log) => {
    /**
     * 调用fs文件追加写入方法
     * 第一个参数是文件路径
     * 第二个参数是写入的数据
     * 第三个参数是写入的编码格式
     */
    fs.appendFile('./app.log', `${log}\n`, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.log(`write log fail ${err.message}`);
        }
    });
};

// 中间件
const middayLog = (req, res, next) => {
    /**
     * 解构赋值
     * 第一个是ip
     * 第二个是请求地址
     * 第三个是请求方式 get post ...
     * 第四个是获取浏览器版本
     */
    const { ip, url, method, headers } = req;
    // 浏览器型号
    const agent = headers['user-agent'];
    // 拼接日志信息 
    const log = `${ip} - ${utilDate()} - ${method} - ${url} - ${agent}`;
    const reqLog = `request: ${log}`;
    console.log(reqLog);
    // 调用写入日志文件方法
    writeLog(reqLog);
    // 执行下一个中间件
    next();
    const resLog = `response: ${log}- data: ${JSON.stringify(req.body)}`;
    console.log(resLog);
    // 执行完毕后，打印响应日志
    writeLog(resLog);
};

// 日志记录
app.get('/', middayLog, (req, res) => {
    // 定义响应数据
    const result = {
        message: 'request get success',
        data: {}
    };
    // 用来打印响应信息
    req.body = result;
    // 写入数据，用于返回给前端
    res.write(JSON.stringify(result));
    // 结束
    res.end();
});

// 用户登录
app.post('/auth', middayLog, (req, res) => {
    // 解构赋值，获取用户名和密码
    const { username, password } = req.body;
    /**
     * 同步读取文件
     * 第一个参数是文件路径
     * 第二个参数是编码格式
     */
    const data = fs.readFileSync('./auth.txt', { encoding: 'utf8' });
    // 使用@进行拆分，第一个是用户名，第二个是密码，解析出来后，再解构
    const [fileName, filePass] = data.split('@');
    const result = {
        message: 'username or passowrd invalid',
        data: {
            username,
            password
        }
    };
    if (username === fileName && password === filePass) {
        result.message = 'request success';
    }
    req.body = result;
    res.write(JSON.stringify(result));
    res.end();

});