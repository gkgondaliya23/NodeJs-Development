const url = require('url');
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type' : 'text/HTML'});
    // console.log(req.url);
    const q = url.parse(req.url, true).query;
    console.log(q);
    if(q.uname =="admin" && q.upwd =="admin")
    {
        res.write('<h1> Login Sucess </h1>');
    }
    else{
        res.write('<h1> Login fail </h1>');
    }
    res.end();
});

server.listen(8000,() => {
    console.log('Server listening on http://localhost:8000');
})