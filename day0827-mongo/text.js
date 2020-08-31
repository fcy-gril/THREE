const express = require('express');
const userModel = require('./dao/models/usermodel1');
const app = express();
app.listen(8080);
userModel.insertMany({
    username: 'user3',
    password: 'user3',
    email: 'aa@aa.com',
    age: 11,
    hobbies: ['aa', 'bb']
  },(err,doc)=>console.log(err))
  userModel.insertMany({
    username: 'user4',
    password: 'user4',
    email: 'aa@aa.com',
    age: 11,
    hobbies: ['aa', 'cc']
  },(err,doc)=>console.log(err))