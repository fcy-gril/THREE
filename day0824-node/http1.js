const http = require('http');
const server = http.createServer();
server.on('request',(request,response)=>{
    console.log(requset.method);
    response.write('<h3>hello world</h3>');
    response.end()
})
server.listen(8080,()=>{
    console.log('服务已启动')
})