const app = require('express')();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
port = 4500;

app.get('/', (req, res) => {
    let option = {
        root: path.join(__dirname)
    }
    let fileName = 'index.html';
    res.sendFile(fileName, option);
})

let user = 0;
io.on('connection', (socket) => {
    console.log('User connected');
    user++;

    socket.emit('newUser', { message: 'Hiii, Welcome users......' });

    socket.broadcast.emit('newUser', { message: user + 'is now connected' });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        user--;
        socket.broadcast.emit('newUser', { message: user + 'is now connected' });
    })
})

server.listen(port, () => {
    console.log(`listening on ${port}`);
});