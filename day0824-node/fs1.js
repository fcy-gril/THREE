// 引入fs和path模块
const fs = require('fs');
const path = require('path');
// 获取当前文件夹的脚本目录
// console.log(__dirname)    //  E:\千锋学习\QF_BK207_THREE\day0824-node.js
const filepath = path.join(__dirname,'db','index.html')
// console.log( filepath )  //  E:\千锋学习\QF_BK207_THREE\day0824-node.js\db\index.html

// 读取文件，异步操作，回调
// fs.readFile(filepath,(err,data)=>{
//     console.log(err)
//     console.log(data)
// })
// // 把数据转为字符串
// fs.readFile(filepath,'utf8',(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

// 写成if函数的形式
// fs.readFile(filepath,'utf8',(err,data)=>{
//     if(err){
//         console.log('读取文件失败')
//     }else{
//         console.log(data)
//     }
// })

// promise的应用
// function readFile(filepath){
//     return new promise ((resolve,reject)=>{
//          fs.readFile(filepath,'utf8',(err,data)=>{
//                 if(err){
//                     console.log('读取文件失败')
//                 }else{
//                     console.log(data)
//                 }
//             })
            
//     })
// }
// readFile(filepath).then(data=>{
//     console.log(data);
//   },err=>console.log(err))

console.log(fs.existsSync(filepath))
// 获取文件信息
fs.stat(filepath,(err,stats)=>{
    console.log(err);
    console.log(stats.size);
    stats.isDirectory();
    stats.isFile()
})