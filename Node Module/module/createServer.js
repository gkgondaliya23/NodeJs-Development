const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Hello world\n');
});

server.listen(8000, ()=>{
    console.log('Server is running.....');
})