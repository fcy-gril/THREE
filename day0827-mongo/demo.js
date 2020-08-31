const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.listen(8080);
// 连接mongdb服务器
mongoose.connect('mongodb://localhost:27017/mydb',{ useNewUrlParser: true, useUnifiedTopology: true })
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        minlength:2,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:2
    },
    email:String,
    age:{
        type:Number,
        default:10
    },
    hobbies:[String],
})
// 定义model
const userModel = mongoose.model('user',userSchema);
userModel.insertMany({
    username:'aaa',
    password:123,
    email:'aaa@aa.com',
    age:16,
    hobbies:['a','b']
})
userModel.insertMany({
    username:'bbb',
    password:123,
    email:'bbb@bb.com',
    age:30,
    hobbies:['c','d']
})
// 修改
userModel.updateMany({username:'aaa'},{$set:{password:234567}}).then(res=>console.log(res))

userModel.find().then(res=>{console.log(res)})

app.get('/',(req,res)=>{
    res.send('数据库')
})