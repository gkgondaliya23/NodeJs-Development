const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 7000;


// db connection
mongoose.connect('mongodb://127.0.0.1:27017/ecomm').then(()=>{
    console.log('DB connection established');
}).catch(err => console.log(err));

app.use(express.json());

app.use('/api/user',userRoutes);


app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});