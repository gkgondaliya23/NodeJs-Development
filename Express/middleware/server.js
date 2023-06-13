const express = require('express');
const auth = require('./auth');
const app = express();

const middleware = (req,res,next) => {
    if(!req.query.age){
        res.send('please provide a age');
    }
    else if(req.query.age < 18){
        res.send('please enter a valid age');
    }
    else {
        next();
    }
}
// apply to all routes in middleware
// app.use(middleware);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home page!</h1>');
});
app.get('/user', middleware, (req, res) => {
    res.send('<h1>Welcome to the user page!</h1>');
});
app.post('/user', auth, (req, res) => {
    res.send('Welcome to the user page!');
});

app.listen(9000, ()=>{
    console.log('server listening on http://localhost:9000');
})