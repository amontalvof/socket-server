const colors = require('colors/safe');
const express = require('express');

// Express Server
const app = express();

// Socket Server
const server = require('http').createServer(app);
// Socket Server Configuration
const io = require('socket.io')(server);

// Display the public directory
app.use(express.static(__dirname + '/public'));

io.on('connection', () => {
    console.log('Client connected!');
});

server.listen(8080, () => {
    console.log(colors.cyan('Server running on port 8080'));
});
