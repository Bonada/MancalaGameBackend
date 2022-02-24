const io = require('socket.io')(process.env.PORT || 4000, {
    cors: {
        origin: ["*"],
    },
})

io.on('connection', client => {
    console.log(client);
})
