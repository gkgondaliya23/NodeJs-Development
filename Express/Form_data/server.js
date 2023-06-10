const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8000;
const userRoutes = require('./userRoutes.js');

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB connection established');
}).catch((err) => console.log(err));

app.use('/register', userRoutes);

app.listen(port, () => {
    console.log('server listening on port 8000');
})