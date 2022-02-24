const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', client => {
    console.log(client);
})

server.listen(process.env.PORT || 4000)
