const express = require('express')
const path = require('path')
const port = 8000;
const app = express();
const publicPath = path.join(__dirname, 'public');

// console.log(publicPath);

//static file with extension
// app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/help', (req, res) => {
    res.sendFile(`${publicPath}/help.html`);
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/nopage.html`);
})


app.listen(port, ()=>{
    console.log('listening on port ' + port);
});