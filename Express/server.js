const express = require('express');
const app = express();
const PORT = 8000;

app.get('/hello', (req,res)=>{
    res.send(`<h1>Hello Your Server is Starting at ${PORT} now......</h1>`);
})

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is starting at port ${PORT}`);
});