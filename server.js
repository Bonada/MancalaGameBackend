const cors = require('cors');
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
app.use(cors());

const server = http.createServer(app)
const io = socketio(server, {
    cors: {
        origin: "*",
    },
})

io.on('connection', client => {
    console.log(client);
    client.on('test', (message, friend) => {
        client.to(friend).emit('recv', message);
    })
})

server.listen(process.env.PORT || 4000)
