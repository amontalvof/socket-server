const Server = require('./models/sever');
// io.on('connection', (socket) => {
//     console.log('Client connected!', socket.id);

//     socket.on('message-to-server', (data) => {
//         console.log(data);
//         io.emit('message-from-server', data);
//     });
// });

const server = new Server();

server.execute();
