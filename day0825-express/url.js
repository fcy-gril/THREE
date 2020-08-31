const express = require('express');
const app = express();
app.listen(8080);
app.get('/',(req,res)=>{
    let query = req.query;
    console.log(query);
    res.send(query);
})


// app.get('/detail/:id' , (req,res)=>{
//     res.send('我是路由参数')
//     console.log(req.params.id)
// });
// app.get('/detail/:id/:name',(req,res)=>{
//     res.send('aaa')
// })