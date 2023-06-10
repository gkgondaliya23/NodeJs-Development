const http = require('http');

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'John',
        age: 36,
    },
    {
        id: 1,
        name: 'peter',
        age: 32,
    },
    {
        id: 2,
        name: 'Harry',
        age: 28,
    }
]

server.on('request',(req,res)=>{
    const items = req.url.split('/');
    if(items[1]==='users'){
                const data = JSON.stringify({id:101,name:'girish', age:33, qualification:'BCA'})
                res.setHeader('Content-Type', 'text/HTML');
                res.write('<h1>Welcome to User Page</h1>');
                res.end(`<h1>${data}</h1>`)
            }
        else if(items[1]==='admin'){
                    res.setHeader('Content-Type', 'text/HTML');
                    res.write('<h1>Welcome to Admin Page</h1>');
                    res.write('req.url='+req.url);
                    res.end();
                }
        else if(items[1]==='friends'){
            res.setHeader('Content-Type', 'application/json');
            if(items.length === 3){
                const friIndex = items[2];
                res.end(JSON.stringify(friends[friIndex]));
            }
            else
            res.end(JSON.stringify(friends));
        }
})


// server.on('request', (req, res) => {
//     if(req.url === '/user'){
//         res.setHeader('Content-Type', 'text/HTML');
//         res.write('<h1>Welcome to User Page</h1>');
//         res.end(JSON.stringify({id:101,name:'girish', age:33, qualification:'BCA'}))
        
//     }
//     else if(req.url=== '/admin'){
//         res.setHeader('Content-Type', 'text/HTML');
//         res.write('<h1>Welcome to Admin Page</h1>');
//         res.write('req.url='+req.url);
//         res.end();
//     }
//     else if(req.url=== '/friends'){
//         res.setHeader('Content-Type', 'text/HTML');
//         res.write('<h1>Welcome to Friends Page</h1>');
//         res.end();
//     }
// })

server.listen(8000, ()=>{
    console.log('Server is running');
});