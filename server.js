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

let gameObj = {
    score1: 0,
    score2: 0,
    cups: new Array(12).fill(4),
}

let gameid = '';

io.on('connection', client => {
    console.log(client);

    //initalize game
    client.on('reqgame', (friend) => {
        client.to(friend).emit('recvgame', friend);
    })

    //place balls
    client.on('movemade', moveObj => {
        client.to(gameid).emit('movemade', moveObj);
    })

    //join game
    client.on('join-game', game => {
        gameid = game;
        client.join(game);
    })
})

server.listen(process.env.PORT || 4000)
