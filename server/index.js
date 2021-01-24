// express setup
const express = require('express');
const socketio = require('socket.io');
const http =  require('http');

//Port
const PORT = process.env.PORT || 5000;

// app router handler
const router = require('./router')

// socket and express setup
const app = express();
const server = http.createServer(app);
const io = socketio(server)

// middleware
app.use(router)

io.on('connection', (socket) => {
  console.log('hello');

  socket.on('disconnect', () => {
    console.log('no hello')
  })
})

server.listen(PORT, () => {console.log('hhhh')})