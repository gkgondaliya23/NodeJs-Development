const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is starting at port ${PORT}`);
});