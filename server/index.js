
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');


const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  console.log('Your are connected !!');

  socket.on('join', ({name, room}) => {
    console.log(name, room);
  })

  socket.on('disconnect', () => {
    console.log('Someone Disconnected')
  })
})

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));