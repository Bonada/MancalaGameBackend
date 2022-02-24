const cors = require('cors');
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
app.use(cors);

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', client => {
    console.log(client);
})

server.listen(process.env.PORT || 4000)
