const express = require('express');
const app = wxpress();
const fs = require('fs');
const bodyParser = require('body-parser');
app.listen(8080);
app.use(bodyParser.urlencoded({extended:false}));
// 获取时间
const utiDate = ()=>{
    const Date = new Date(); //实例一个时间对象；
    const year = myDate.getFullYear(); 
    const month = myDate.getMonth() + 1; 
    const day = myDate.getDate(); 
    const hour = myDate.getHours(); 
    const minute = myDate.getMinutes(); 
    const second = myDate.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}