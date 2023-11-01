"use strict";

var express = require('express');
var http = require('http');
var socketIo = require('socket.io');
var app = express();
var server = http.createServer(app);
var io = socketIo(server);
var PORT = process.env.PORT || 3000;
app.use(express["static"](__dirname + '/assets'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
  console.log('Um jogador se conectou');

  // Aqui você pode adicionar lógica para lidar com eventos do jogo e comunicação entre jogadores.
  // Por exemplo, você pode enviar mensagens de chat, atualizações de posição do jogador, etc.

  socket.on('disconnect', function () {
    console.log('Um jogador se desconectou');
  });
});
server.listen(PORT, function () {
  console.log("Servidor rodando na porta ".concat(PORT));
});