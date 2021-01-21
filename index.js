// express setup
const express = require('express');
const app =  express();
const PORT = 3000 || process.env.PORT;
const path = require('path');
// socket io setup
const http = require('http');
const server =  http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);



// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));




io.on('connection', socket => {
  console.log('hello')
})





server.listen(PORT, () => console.log('hhhh'));