const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Um jogador se conectou');

  // Aqui você pode adicionar lógica para lidar com eventos do jogo e comunicação entre jogadores.
  // Por exemplo, você pode enviar mensagens de chat, atualizações de posição do jogador, etc.

  socket.on('disconnect', () => {
    console.log('Um jogador se desconectou');
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
