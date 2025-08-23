const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Serve static files from a 'public' directory
// We will create this directory in the next step
app.use(express.static('public'));

app.get('/', (req, res) => {
  // We will create the index.html file in the 'public' directory
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // Broadcast the message to everyone
    io.emit('chat message', msg);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
