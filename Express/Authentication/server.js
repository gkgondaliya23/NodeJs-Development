const express = require('express');
const app = express();
const PORT = 7000;
const login = require('./Logins/login.js');
const model1 = require('./Models/model');

app.use(express.json());

app.use('/login', login);
app.use('/module1', model1);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is starting at port ${PORT}`);
});