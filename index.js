const colors = require('colors/safe');
// Express Server
const app = require('express')();
// Socket Server
const server = require('http').createServer(app);
// Socket Server Configuration
const io = require('socket.io')(server);

io.on('connection', () => {
    /* … */
});

server.listen(8080, () => {
    console.log(colors.cyan('Server running on port 8080'));
});
