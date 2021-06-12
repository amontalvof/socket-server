const path = require('path');
const colors = require('colors/safe');
// Express Server
const express = require('express');
// HTTP Server
const http = require('http');
// Socket Server
const socketIo = require('socket.io');

class Server {
    constructor() {
        this.port = 8080;
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIo(this.server, {
            /** configurations */
        });
    }

    middlewares() {
        // Display the public directory
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    socketsConfiguration() {}

    execute() {
        //Initialize Middlewares
        this.middlewares();
        // Initialize Sockets
        this.socketsConfiguration();
        //Initialize Server
        this.server.listen(this.port, () => {
            console.log(colors.cyan(`Server running on port ${this.port}`));
        });
    }
}

module.exports = Server;