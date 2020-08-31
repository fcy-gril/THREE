const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const app = express();
app.listen(8080);
app.use(express.static('html'));
app.use(bodyParser.urlencoded({extended: false}));
app.post('/login1',(req,res)=>{
    console.log(req.body);
    res.send('')
})
